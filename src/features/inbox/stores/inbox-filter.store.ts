import type {InboxFilter, InboxSort} from "@/features/inbox/types/inbox-filters.type.ts";
import {create} from "zustand";

type InboxFilterState = {
    sort: InboxSort;
    setSort: (sort: InboxSort) => void;
    filter: InboxFilter,
    setFilter: (filter: InboxFilter) => void;
}

export const useInboxFilterStore = create<InboxFilterState>((set) => ({
    sort: "smart",
    setSort: (sort) => set({sort}),
    filter: "all",
    setFilter: (filter) => set({filter}),
}))