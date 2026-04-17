export type Task = {
    id: string;
    project_id: string;
    title: string;
    description: string;
    start_date: string;
    due_date: string;
    is_archived: boolean;
    assignee_id: string;
    status: "todo" | "in_progress" | "completed";
    priority: "low" | "medium" | "high";
}