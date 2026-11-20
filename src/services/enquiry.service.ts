import { apiClient } from "@/lib/api/axios";
import { normalizeApiError } from "@/lib/api/error";
import type { EnquiryFormPayload, EnquiryFormResponse } from "@/types/api.types";

/** POST /enquiry-form — file upload requires multipart/form-data. */
export async function submitEnquiryForm(
  payload: EnquiryFormPayload
): Promise<EnquiryFormResponse> {
  try {
    const formData = new FormData();
    formData.append("interested_in", payload.interested_in);
    formData.append("fullname", payload.fullname);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("proposal", payload.proposal);
    if (payload.role) formData.append("role", payload.role);
    formData.append("file", payload.file);

    const response = await apiClient.post<EnquiryFormResponse>(
      "/enquiry-form",
      formData
    );
    return response.data;
  } catch (error: unknown) {
    // Keep Axios error's response.data for field-level validation display.
    if (error && typeof error === "object" && "response" in error) {
      throw error;
    }
    throw normalizeApiError(error);
  }
}
