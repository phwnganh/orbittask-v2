import type {InviteStatus} from "@/features/member/types/member.type.ts";

export const memberKeys = {
    all: ["members"] as const,
    project: (project_id: string) =>
        [...memberKeys.all, project_id] as const,
    lists: (project_id: string) => [...memberKeys.project(project_id), "list"] as const,
    list: ({ project_id, search, invite_status}: {
        project_id: string;
        search?: string;
        invite_status?: InviteStatus
    }) =>
        [...memberKeys.lists(project_id), {search, invite_status}] as const,
}