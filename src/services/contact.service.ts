
import { apiClient } from "@/lib/api/axios";
import { normalizeApiError } from "@/lib/api/error";

import type {
  ContactFormPayload,
  ContactFormResponse,
} from "@/types/api.types";

/**
 * POST /contact-form
 * Sends contact form data as JSON.
 */
export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ContactFormResponse> {
  try {
    const response = await apiClient.post<ContactFormResponse>(
      "/contact-form",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Handle backend application-level errors
    if (response.data.code !== 200) {
      throw new Error("Contact form submission was not accepted.");
    }

    return response.data;
  } catch (error: unknown) {
    throw normalizeApiError(error);
  }
}
