import type {TaskPriority, TaskStatus} from "@/features/task/types/task.type.ts";

export type Inbox = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    due_date: string;
    created_at: string;
    project_title: string;
}