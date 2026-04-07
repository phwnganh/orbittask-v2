import type {Profile} from "@/features/auth/types/auth.type.ts";
import {create} from "zustand";

type ProfileState = {
    profile: Profile | null;
    setProfile: (profile: Profile | null) => void;
    clearProfile: () => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
    profile: null,
    setProfile: (profile) => set({profile}),
    clearProfile: () => set({profile: null}),
}))