import type { CommentWithReplies } from "@/features/task-detail/types/comment.type.ts";
import type { Task } from "@/features/task/types/task.type.ts";
import CommentActivity from "@/features/task-detail/components/task-detail-activity/task-activity-content/comment-activity/CommentActivity.tsx";
import CommentReplyList from "@/features/task-detail/components/task-detail-activity/task-activity-content/comment-activity/CommentWithReplies/CommentReplyList.tsx";
import TaskActivityDisplayUserInfo from "../shared/TaskActivityDisplayUserInfo";
import type { Profile } from "@/features/auth/types/auth.type";

type TaskActivityCommentItemProps = {
  comment: CommentWithReplies;
  task: Task;
  onReply: (comment: CommentWithReplies) => void;
  me?: Profile | null;
};
const TaskActivityCommentItem = ({
  comment,
  task,
  onReply,
  me,
}: TaskActivityCommentItemProps) => {
  const isDeletedComment = comment.deleted_at !== null;
  return (
    <TaskActivityDisplayUserInfo
      userId={comment.user_id}
      firstName={comment.first_name}
      lastName={comment.last_name}
      me={me}
      avatarUrl={comment.avatar_url}
      createdAt={comment.created_at}
      updatedAt={comment.updated_at}
      showEdited={!isDeletedComment && !!comment.updated_at}
    >
      <CommentActivity
        task={task}
        commentId={comment.id}
        content={comment.content}
        userId={comment.user_id}
        onReply={() => onReply(comment)}
      />
      {comment.replies.length > 0 && (
        <CommentReplyList comments={comment} task={task} me={me} />
      )}
    </TaskActivityDisplayUserInfo>
  );
};

export default TaskActivityCommentItem;
