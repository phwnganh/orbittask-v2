import type { CommentWithReplies } from "@/features/task-detail/types/comment.type.ts";
import CommentReplyItem from "@/features/task-detail/components/task-detail-activity/task-activity-content/comment-activity/CommentWithReplies/CommentReplyItem.tsx";
import type { Task } from "@/features/task/types/task.type.ts";

type CommentReplyListProps = {
  comments: CommentWithReplies;
  task: Task;
};
const CommentReplyList = ({
  comments,
  task,
}: CommentReplyListProps) => {
  return (
    <div className={"ml-6 mt-3 border-l border-border-primary pl-4"}>
      <div className={"space-y-3"}>
        {comments?.replies?.map((reply) => (
          <CommentReplyItem key={reply.id} comment={reply} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CommentReplyList;
