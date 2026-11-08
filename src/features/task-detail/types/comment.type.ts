export type Comment = {
  id: string;
  task_id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  content: string;
  parent_id: string | null;
  created_at: string;
  updated_at?: string | null;
  deleted_at?: string | null;
};

export type CommentWithReplies = Comment & {
  replies: Comment[];
};
