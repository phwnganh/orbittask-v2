import type {OwnershipFilter, RelevanceFilter, SortFilter} from "@/features/project/types/project-filter.type.ts";
import {create} from "zustand";

type ProjectFilterState = {
    ownership: OwnershipFilter;
    relevance: RelevanceFilter;
    sort: SortFilter;
    search: string;
    page: number;
    pageSize: number;

    setSearch: (search: string) => void;

    setPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;

    nextPage: () => void;
    prevPage: () => void;
    resetPage: () => void;

    setOwnership: (value: OwnershipFilter) => void;
    setRelevance: (relevance: RelevanceFilter) => void;
    setSort: (sort: SortFilter) => void;

    reset: () => void;
}

export const useProjectFilterStore = create<ProjectFilterState>((set) => ({
    ownership: "all",
    relevance: "all",
    sort: "smart",
    search: "",
    page: 1,
    pageSize: 6,
    setOwnership: (ownership) => set({ownership, page: 1}),
    setRelevance: (relevance) => set({relevance, page: 1}),
    setSort: (sort) => set({sort, page: 1}),
    setSearch: (search) => set({search, page: 1}),
    setPage: (page) => set({page}),
    setPageSize: (pageSize) => set({pageSize, page: 1}),
    nextPage: () => set(s => ({page: s.page + 1})),
    prevPage: () => set(s => ({page: Math.max(1, s.page - 1)})),
    resetPage: () => set({page: 1}),
    reset: () => set({
        ownership: "all",
        relevance: "all",
        sort: "newest",
        page: 1,
        pageSize: 6,
    })
}))