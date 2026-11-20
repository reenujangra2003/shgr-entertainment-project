
import axios from "axios";

/**
 * Standard API error structure
 */
export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
  isCancelled?: boolean;
}

/**
 * Safely extract an error message from backend response.
 */
function getBackendMessage(data: unknown): string | undefined {
  if (typeof data === "string") {
    // Avoid displaying HTML error pages
    const message = data.trim();

    if (
      message.length > 0 &&
      message.length <= 300 &&
      !message.startsWith("<")
    ) {
      return message;
    }

    return undefined;
  }

  if (typeof data !== "object" || data === null) {
    return undefined;
  }

  const response = data as Record<string, unknown>;

  const message = response.message ?? response.error;

  if (
    typeof message === "string" &&
    message.trim().length > 0 &&
    message.length <= 300 &&
    !message.includes("\n") &&
    !message.includes("<")
  ) {
    return message.trim();
  }

  return undefined;
}

/**
 * Return a user-friendly message based on HTTP status.
 */
function getStatusMessage(status?: number): string {
  switch (status) {
    case 400:
      return "Invalid request. Please check your information.";

    case 401:
      return "Authentication is required. Please log in again.";

    case 403:
      return "You do not have permission to perform this action.";

    case 404:
      return "The requested resource was not found.";

    case 408:
      return "The request timed out. Please try again.";

    case 422:
      return "Please check the submitted information.";

    case 429:
      return "Too many requests. Please try again later.";

    case 500:
    case 502:
    case 503:
    case 504:
      return "Server is temporarily unavailable. Please try again later.";

    default:
      return "Something went wrong. Please try again.";
  }
}

/**
 * Check if the request was cancelled.
 */
export function isRequestCancelled(error: unknown): boolean {
  return (
    axios.isCancel(error) ||
    (error instanceof Error && error.name === "AbortError") ||
    (typeof error === "object" &&
      error !== null &&
      "isCancelled" in error &&
      error.isCancelled === true)
  );
}

/**
 * Convert unknown errors into a consistent ApiError.
 */
export function normalizeApiError(error: unknown): ApiError {
  // 1. Cancelled requests
  if (isRequestCancelled(error)) {
    return {
      message: "Request cancelled.",
      code: "REQUEST_CANCELLED",
      isCancelled: true,
    };
  }

  // 2. Axios errors
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const data: unknown = error.response?.data;

    // Timeout
    if (
      error.code === "ECONNABORTED" ||
      error.code === "ETIMEDOUT"
    ) {
      return {
        message: "Request timed out. Please try again.",
        status,
        code: error.code,
      };
    }

    // Network failure
    if (!error.response) {
      return {
        message: "Unable to connect. Please check your internet connection.",
        code: error.code ?? "NETWORK_ERROR",
      };
    }

    // Server errors should not expose raw backend messages
    const backendMessage =
      status !== undefined && status < 500
        ? getBackendMessage(data)
        : undefined;

    return {
      message: backendMessage ?? getStatusMessage(status),
      status,
      code: error.code,
      details: data,
    };
  }

  // 3. Already normalized API errors
  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string" &&
    "status" in error
  ) {
    return error as ApiError;
  }

  // 4. Unknown errors
  return {
    message: "An unexpected error occurred. Please try again.",
    code: "UNKNOWN_ERROR",
  };
}
