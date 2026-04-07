import {create} from "zustand";
import type {User} from "@supabase/supabase-js";

type AuthState = {
    user: User | null;
    isInitialized: boolean;
    setUser: (user: User | null) => void;
    setInitialized: (value: boolean) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isInitialized: false,
    setUser: (user) => set({user}),
    setInitialized: (value) => set({isInitialized: value}),
    logout: () => set({
        user: null,
        isInitialized: false,
    })
}))
