export type Member = {
    user_id: string;
    avatar_url: string;
    email: string;
    first_name: string;
    last_name: string;
    project_id: string;
    project_title: string;
    project_description: string;
    invite_status: string;
    role: string;
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

export type InviteStatus = "pending" | "accepted";
