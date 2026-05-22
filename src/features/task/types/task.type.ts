export type Task = {
    id: string;
    project_id: string;
    title: string;
    description: string;
    start_date: string;
    due_date: string;
    assignee_id: string;
    status: TaskStatus;
    priority: "low" | "medium" | "high";
}

export type TaskStatus = "todo" | "in_progress" | "completed";