export type ActivityType = | "comment" | "task_created" | "status_changed" | "due_date_changed" | "content_changed" | "assignee_changed" | "priority_changed";

export type Activity = {
    action_type: ActivityType;
    first_name: string;
    last_name: string;
    avatar_url: string;
    created_at: string;
    metadata: {
        content?: string;
        from?: string;
        to?: string;
    }

}