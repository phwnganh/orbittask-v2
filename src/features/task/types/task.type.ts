import type {Profile} from "@/features/auth/types/auth.type.ts";
import type {Project} from "@/features/project/types/project.type.ts";

export type Task = {
    id: string;
    project_id: string;
    title: string;
    description: string;
    start_date: string;
    due_date: string;
    assignee_id: string;
    assignee?: Profile;
    status: TaskStatus;
    priority: "low" | "medium" | "high";
    created_by: string;
    project?: Project;
}

export type TaskStatus = "todo" | "in_progress" | "completed";