import {create} from "zustand";
import type {MemberResponse} from "@/features/member/types/member.type.ts";

type MemberState = {
    keyword: string;
    selectedUsers: MemberResponse[];
    openInviteMember: boolean;
    onOpenInviteMemberModal: () => void;
    onCloseInviteMemberModal: () => void;
    setKeyword: (keyword: string) => void;
    addSelectedUsers: (user: MemberResponse) => void;
    removeSelectUsers: (userId: string) => void;
}

export const useMemberStore = create<MemberState>((set) => ({
    keyword: "",
    selectedUsers: [],
    openInviteMember: false,
    onOpenInviteMemberModal: () => set({openInviteMember: true}),
    onCloseInviteMemberModal: () => set({openInviteMember: false}),
    setKeyword: (keyword) => set({keyword}),
    addSelectedUsers: (user) => set((state) => {
        const exists = state.selectedUsers.some(item => item.user_id === user.user_id)
        if(exists) return state;
        return {
            selectedUsers: [...state.selectedUsers, user]
        }
    }),
    removeSelectUsers: (userId) => set((state) => ({
        selectedUsers: state.selectedUsers.filter(user => user.user_id !== userId)
    }))
}))