import type {OwnershipFilter, RelevanceFilter, SortFilter} from "@/features/project/types/project-filter.type.ts";
import {create} from "zustand";

type ProjectFilterState = {
    ownership: OwnershipFilter;
    relevance: RelevanceFilter;
    sort: SortFilter;

    setOwnership: (value: OwnershipFilter) => void;
    setRelevance: (relevance: RelevanceFilter) => void;
    setSort: (sort: SortFilter) => void;

    reset: () => void;
}

export const useProjectFilterStore = create<ProjectFilterState>((set) => ({
    ownership: "all",
    relevance: "all",
    sort: "smart",
    setOwnership: (ownership) => set({ownership}),
    setRelevance: (relevance) => set({relevance}),
    setSort: (sort) => set({sort}),
    reset: () => set({
        ownership: "all",
        relevance: "all",
        sort: "newest",
    })
}))