
"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import type { Profile } from "@/types/api.types";

const ProfileContext = createContext<Profile | null>(null);

interface ProfileProviderProps {
  children: ReactNode;
  profile: Profile | null;
}

export function ProfileProvider({
  children,
  profile,
}: ProfileProviderProps) {
  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
