import {create} from "zustand";
import {persist} from "zustand/middleware";

type SidebarState = {
    desktopCollapsed: boolean;

    isMobileOpen: boolean;
    toggleDesktop: () => void;

    openMobile: () => void;
    closeMobile: () => void;
}

export const useSidebarStore = create<SidebarState>()(persist(set => ({
    desktopCollapsed: false,
    isMobileOpen: false,
    toggleDesktop: () =>
        set((state) => ({
            desktopCollapsed: !state.desktopCollapsed
        })),
    openMobile: () =>
        set((state) => ({
            isMobileOpen: !state.isMobileOpen
        })),

    closeMobile: () => set({ isMobileOpen: false }),
}), {
    name: "sidebar-storage",
    partialize: (state) => ({desktopCollapsed: state.desktopCollapsed})
}))