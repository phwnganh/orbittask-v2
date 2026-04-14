import {create} from "zustand";
import type {User} from "@supabase/supabase-js";

type AuthState = {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({user}),
    logout: () => set({
        user: null
    })
}))
