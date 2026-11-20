
import { apiClient } from "@/lib/api/axios";
import { normalizeApiError } from "@/lib/api/error";
import { unstable_rethrow } from "next/navigation";

import type {
  ApiRequestOptions,
  TeamMembersResponse,
} from "@/types/api.types";

/**
 * GET /team-member
 * Fetch all team members from backend.
 */
export async function getTeamMembers(
  options: ApiRequestOptions = {}
): Promise<TeamMembersResponse> {
  try {
    console.log("🚀 Calling Team Member API...");

    const response = await apiClient.get<TeamMembersResponse>(
      "/team-member",
      {
        signal: options.signal,
      }
    );

    console.log("✅ Team API Status:", response.status);
    console.log("✅ Team API Response:", response.data);

    return response.data;
  } catch (error: unknown) {
    // Preserve Next.js framework errors.
    unstable_rethrow(error);

    const apiError = normalizeApiError(error);

    console.error("❌ Team Member API Error:", {
      message: apiError.message,
      status: apiError.status,
      code: apiError.code,
    });

    throw apiError;
  }
}
