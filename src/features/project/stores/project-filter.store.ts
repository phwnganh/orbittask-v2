import type {OwnershipFilter, SortFilter, StatusFilter} from "@/features/project/types/project-filter.type.ts";
import {create} from "zustand";

type ProjectFilterState = {
    ownership: OwnershipFilter;
    status: StatusFilter;
    sort: SortFilter;

    setOwnership: (value: OwnershipFilter) => void;
    setStatus: (status: StatusFilter) => void;
    setSort: (sort: SortFilter) => void;

    reset: () => void;
}

export const useProjectFilterStore = create<ProjectFilterState>((set) => ({
    ownership: "all",
    status: "active",
    sort: "newest",
    setOwnership: (ownership) => set({ownership}),
    setStatus: (status) => set({status}),
    setSort: (sort) => set({sort}),
    reset: () => set({
        ownership: "all",
        status: "active",
        sort: "newest",
    })
}))