export type Task = {
    id: string;
    project_id: string;
    title: string;
    description: string;
    start_date: string;
    due_date: string;
    assignee_id: string;
    status: TaskStatus;
    priority: TaskPriority;
    created_by: string;
    project_owner_id?: string;
    user_id?: string;
    first_name?: string;
    last_name?: string;
    avatar_url?: string;
}
export type TaskPriority = "low" | "medium" | "high";
export type TaskStatus = "todo" | "in_progress" | "completed";