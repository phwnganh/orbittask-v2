export const mapInviteMember = (project_id: string, user_id: string) => ({
    project_id,
    user_id,
    role: "member",
    invite_status: "pending"
})