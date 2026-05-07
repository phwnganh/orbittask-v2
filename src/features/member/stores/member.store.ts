import {create} from "zustand";
import type {MemberResponse} from "@/features/member/types/member.type.ts";

type MemberState = {
    keyword: string;
    selectedUser: MemberResponse | null;
    openInviteMember: boolean;
    onOpenInviteMemberModal: () => void;
    onCloseInviteMemberModal: () => void;
    setKeyword: (keyword: string) => void;
    setSelectedUser: (user?: MemberResponse) => void;
}

export const useMemberStore = create<MemberState>((set) => ({
    keyword: "",
    selectedUser: null,
    openInviteMember: false,
    onOpenInviteMemberModal: () => set({openInviteMember: true}),
    onCloseInviteMemberModal: () => set({openInviteMember: false}),
    setKeyword: (keyword) => set({keyword}),
    setSelectedUser: (selectedUser) => set({selectedUser: selectedUser})
}))