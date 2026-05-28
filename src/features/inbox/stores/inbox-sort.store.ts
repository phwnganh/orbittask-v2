import type {InboxSortFilter} from "@/features/inbox/types/inbox-sort.type.ts";
import {create} from "zustand";

type InboxSortState = {
    sort: InboxSortFilter;
    setSort: (sort: InboxSortFilter) => void;
}

export const useInboxSortStore = create<InboxSortState>((set) => ({
    sort: "smart",
    setSort: (sort) => set({sort})
}))