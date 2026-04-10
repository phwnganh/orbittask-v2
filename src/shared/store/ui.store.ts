import {create} from "zustand";

type UIState = {
    isUserMenuOpen: boolean;
    onUserMenuOpen: (value: boolean) => void;
    toggleUserMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    isUserMenuOpen: false,
    onUserMenuOpen: (value) => set({isUserMenuOpen: value}),
    toggleUserMenu: () => set((state) => ({
        isUserMenuOpen: !state.isUserMenuOpen
    }))
}))