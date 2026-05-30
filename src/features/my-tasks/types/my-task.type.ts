import type {TaskPriority, TaskStatus} from "@/features/task/types/task.type.ts";

export type MyTask = {
    id: string;
    project_title: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    start_date: string;
    due_date: string;
    is_overdue: boolean;
}

export type MyTaskStatus = {
    today_tasks: number;
    overdue_tasks: number;
    upcoming_tasks: number;
    completed_tasks: number;
}