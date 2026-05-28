import type {Member} from "@/features/member/types/member.type.ts";

export type Project = {
    id: string;
    title: string;
    description: string;
    owner_id?: string;
    is_archived?: boolean;
    created_at: string;
    total_tasks_count?: number;
    completed_tasks_count?: number;
    overdue_tasks_count?: number;
    my_tasks_count?: number;
    project_health?: string;
    is_pinned?: boolean;
    members?: Member[];
}

export type ProjectResponse = {
    data: Project[];
    total: number;
}

export type ProjectHealth = "on_track" | "at_risk" | "completed"
