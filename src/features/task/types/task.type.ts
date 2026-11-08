export type Task = {
    id: string;
    project_id: string;
    title: string;
    description: string;
    start_date: string;
    due_date: string;
    project_name?: string;
    assignee_id: string;
    status: TaskStatus;
    priority: TaskPriority;
    created_by: string;
    project_owner_id?: string;
    user_id?: string;
    first_name?: string;
    last_name?: string;
    avatar_url?: string;
    created_by_first_name?: string;
    created_by_last_name?: string;
}
export type TaskPriority = "low" | "medium" | "high";
export type TaskStatus = "todo" | "in_progress" | "completed";