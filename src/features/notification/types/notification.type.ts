export type NotificationType =
  | "project_invitation"
  | "invitation_resent"
  | "member_removed"
  | "member_left"
  | "task_assigned"
  | "task_status_changed"
  | "task_priority_changed"
  | "task_due_date_changed"
  | "assignee_changed"
  | "comment_added"
  | "comment_replied"
  | "task_due_soon"
  | "task_overdue";
export type Notification = {
  id: string;
  receiver_id: string;
  actor_id: string | null;
  type: NotificationType;
  title: string;
  message: string;
  project_id: string | null;
  task_id: string | null;
  metadata: Record<string, unknown>;
  is_read: boolean;
  created_at: string;
};
