
import { unstable_rethrow } from "next/navigation";

import { apiClient } from "@/lib/api/axios";
import { normalizeApiError } from "@/lib/api/error";

import type {
  ApiRequestOptions,
  ProjectsResponse,
} from "@/types/api.types";

export async function getProjects(
  options: ApiRequestOptions = {}
): Promise<ProjectsResponse> {
  try {
    console.log("🚀 Calling Our Project API...");

    const response = await apiClient.get<ProjectsResponse>(
      "/our-project",
      {
        signal: options.signal,
      }
    );

    console.log("✅ HTTP Status:", response.status);
    console.log("✅ Full API Response:", response.data);
    console.log("✅ Projects Data:", response.data.data);

    return response.data;
  } catch (error: unknown) {
    // Important: Do not normalize Next.js internal errors
    unstable_rethrow(error);

    const apiError = normalizeApiError(error);

    console.error("❌ Project API Error:", {
      message: apiError.message,
      status: apiError.status,
      code: apiError.code,
    });

    throw apiError;
  }
}
