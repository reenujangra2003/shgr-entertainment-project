
import type { Profile, ProfileResponse } from "@/types/api.types";

export async function getProfile(): Promise<Profile> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is missing");
  }

  const response = await fetch(
    `${baseUrl.replace(/\/$/, "")}/profile`,
    {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 300,
        tags: ["profile"],
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Profile API failed: HTTP ${response.status}`
    );
  }

  const result: ProfileResponse = await response.json();

  if (result.code !== 200 || !result.data) {
    throw new Error("Invalid profile API response");
  }

  return result.data;
}
