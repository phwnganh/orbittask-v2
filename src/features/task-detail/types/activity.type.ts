import type {ActivityProfile} from "@/features/profile/types/profile.type.ts";

export type ActivityType = | "task_created" | "status_changed" | "due_date_changed" | "content_changed" | "assignee_changed" | "priority_changed";

export type Activity = {
    id: string;
    action_type: ActivityType;
    first_name: string;
    last_name: string;
    avatar_url: string;
    created_at: string;
    comment_updated_at?: string;
    metadata: {
        comment_id?: string;
        content?: string;
        parent_id?: string;
        from?: string;
        to?: string;
        from_user?: ActivityProfile;
        to_user?: ActivityProfile;
    }

}