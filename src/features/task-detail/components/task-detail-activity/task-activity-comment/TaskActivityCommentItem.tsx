import type { Comment } from "@/features/task-detail/types/comment.type.ts";
import type { Task } from "@/features/task/types/task.type.ts";
import { formatDistanceToNow } from "date-fns";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import CommentActivity from "@/features/task-detail/components/task-detail-activity/task-activity-content/comment-activity/CommentActivity.tsx";

type TaskActivityCommentItemProps = {
  comment: Comment;
  task: Task;
};
const TaskActivityCommentItem = ({
  comment,
  task,
}: TaskActivityCommentItemProps) => {
  const displayName =
    [comment.first_name, comment.last_name].filter(Boolean).join(" ") ||
    "Unknown user";
  const createdAt = comment.created_at ? new Date(comment.created_at) : null;
  const commentUpdatedAt = comment.updated_at
    ? new Date(comment.updated_at)
    : null;
  const isCreatedAtValid =
    createdAt instanceof Date && !Number.isNaN(createdAt.getTime());
  const isUpdatedAtValid =
    commentUpdatedAt instanceof Date &&
    !Number.isNaN(commentUpdatedAt.getTime());
  const createdAtLabel = isCreatedAtValid
    ? formatDistanceToNow(createdAt, { addSuffix: true })
    : "";

  const updatedAtLabel = isUpdatedAtValid
    ? formatDistanceToNow(commentUpdatedAt, { addSuffix: true })
    : "";

  const isDeletedComment = comment.deleted_at !== null;
  const showEdited = !isDeletedComment && isUpdatedAtValid;
  return (
    <div className={"flex gap-3 py-3"}>
      <Avatar size="sm" avatarUrl={comment.avatar_url} />

      <div className={"flex-1 min-w-0"}>
        <div className={"flex items-center gap-2 flex-wrap"}>
          <span className={"font-medium text-sm"}>{displayName}</span>

          <span className="text-xs text-text-secondary">
            {showEdited ? `Edited ${updatedAtLabel}` : createdAtLabel}
          </span>
        </div>

        <div className={"mt-1 text-sm text-text-primary"}>
          <CommentActivity
            task={task}
            commentId={comment.id}
            content={comment.content}
            userFirstName={comment.first_name}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskActivityCommentItem;
