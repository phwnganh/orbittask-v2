export type Member = {
    id: string;
    invited_at: string;
    project_id: string;
    user_id: string;
    invite_status: "pending" | "accepted" | "rejected";
    role: "owner" | "member";
}

export type InviteMemberPayload = {
    project_id: string;
    user_ids: string[]
}

export type RemoveMemberPayload = {
    project_id: string;
    member_id: string;
}

export type MemberResponse = {
    user_id: string;
    avatar_url: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    invite_status: string;
}
