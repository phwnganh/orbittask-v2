import {create} from "zustand";

type MemberFilterState = {
    search: string;
    setSearch: (search: string) => void;
}

export const useMemberFilterStore = create<MemberFilterState>((set) => ({
    search: "",
    setSearch: (search) => set({search}),
}))