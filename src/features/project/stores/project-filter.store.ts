import type {OwnershipFilter, StatusFilter} from "@/features/project/types/project-filter.type.ts";
import {create} from "zustand";

type ProjectFilterState = {
    ownership: OwnershipFilter;
    status: StatusFilter;
    setOwnership: (value: OwnershipFilter) => void;
    setStatus: (status: StatusFilter) => void;
    reset: () => void;
}

export const useProjectFilterStore = create<ProjectFilterState>((set) => ({
    ownership: "all",
    status: "active",
    setOwnership: (ownership) => set({ownership}),
    setStatus: (status) => set({status}),
    reset: () => set({
        ownership: "all",
        status: "active",
    })
}))