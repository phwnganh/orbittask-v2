import type { Task } from "@/features/task/types/task.type.ts";
import { useViewComments } from "@/features/task-detail/hooks/useViewComments.ts";
import TaskActivityCommentItem from "@/features/task-detail/components/task-detail-activity/task-activity-comment/TaskActivityCommentItem.tsx";
import RemoveCommentModal from "@/features/task-detail/components/modals/remove-comment-modal/RemoveCommentModal.tsx";

type TaskActivityCommentProps = {
  task: Task;
};
const TaskActivityCommentList = ({ task }: TaskActivityCommentProps) => {
  const { data: comments } = useViewComments({ task_id: task.id });

  const visibleComments = comments?.filter(
    (comment) => comment.deleted_at === null,
  );
  return (
    <div className={"space-y-4"}>
      {visibleComments?.map((comment) => (
        <TaskActivityCommentItem
          key={comment.id}
          comment={comment}
          task={task}
        />
      ))}

      <RemoveCommentModal taskId={task.id} />
    </div>
  );
};

export default TaskActivityCommentList;
