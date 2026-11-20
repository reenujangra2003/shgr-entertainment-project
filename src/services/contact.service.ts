
import { apiClient } from "@/lib/api/axios";
import { normalizeApiError } from "@/lib/api/error";

import type {
  ContactFormPayload,
  ContactFormResponse,
} from "@/types/api.types";

export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ContactFormResponse> {
  try {
    const formData = new FormData();

    formData.append("fullname", payload.fullname);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("subject", payload.subject);
    formData.append("message", payload.message);

    const response = await apiClient.post<ContactFormResponse>(
      "/contact-form",
      formData
    );

    return response.data;
  } catch (error: unknown) {
    throw normalizeApiError(error);
  }
}
