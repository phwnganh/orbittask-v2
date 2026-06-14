export type Comment = {
    id: string;
    task_id: string;
    user_id: string;
    content: string;
    parent_id: string | null;
    created_at: string;
}