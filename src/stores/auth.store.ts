import type {Profile} from "@/types/user.type.ts";
import {create} from "zustand";
import type {User} from "@supabase/supabase-js";

type AuthState = {
    user: User | null;
    profile: Profile | null;
    isInitialized: boolean;
    setUser: (user: User | null) => void;
    setProfile: (profile: Profile | null) => void;
    setInitialized: (value: boolean) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    profile: null,
    isInitialized: false,
    setUser: (user) => set({user}),
    setProfile: (profile) => set({profile}),
    setInitialized: (value) => set({isInitialized: value}),
    logout: () => set({
        user: null,
        profile: null,
        isInitialized: false,
    })
}))
