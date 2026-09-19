import type { Task } from "@/features/task/types/task.type.ts";
import { useViewComments } from "@/features/task-detail/hooks/useViewComments.ts";
import TaskActivityCommentItem from "@/features/task-detail/components/task-detail-activity/task-activity-comment/TaskActivityCommentItem.tsx";
import RemoveCommentModal from "@/features/task-detail/components/modals/remove-comment-modal/RemoveCommentModal.tsx";
import { commentWithReplies } from "@/features/task-detail/utils/task-activity-comment.util.ts";
import type { CommentWithReplies } from "@/features/task-detail/types/comment.type";

type TaskActivityCommentProps = {
  task: Task;
  onReply: (comment: CommentWithReplies) => void;
};
const TaskActivityCommentList = ({ task, onReply }: TaskActivityCommentProps) => {
  const { data: comments } = useViewComments({ task_id: task.id });

  const commentsWithReplies = commentWithReplies(comments ?? []);
  return (
    <div className={"space-y-4"}>
      {commentsWithReplies?.map((comment) => (
        <TaskActivityCommentItem
          key={comment.id}
          comment={comment}
          task={task}
          onReply={onReply}
        />
      ))}

      <RemoveCommentModal taskId={task.id} />
    </div>
  );
};

export default TaskActivityCommentList;
