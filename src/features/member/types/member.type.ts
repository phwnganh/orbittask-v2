export type Member = {
    id: string;
    invited_at: string;
    project_id: string;
    user_id: string;
    invite_status: "pending" | "accepted" | "rejected";
    role: "owner" | "member";
}