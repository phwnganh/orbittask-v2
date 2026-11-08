import type { CommentWithReplies } from "@/features/task-detail/types/comment.type.ts";
import CommentReplyItem from "@/features/task-detail/components/task-detail-activity/task-activity-content/comment-activity/CommentWithReplies/CommentReplyItem.tsx";
import type { Task } from "@/features/task/types/task.type.ts";
import type { Profile } from "@/features/auth/types/auth.type";

type CommentReplyListProps = {
  comments: CommentWithReplies;
  task: Task;
  me?: Profile | null;
};
const CommentReplyList = ({
  comments,
  task,
  me,
}: CommentReplyListProps) => {
  return (
    <div className={"ml-3 sm:ml-6 mt-3 border-l border-border-primary pl-3 sm:pl-4"}>
      <div className={"space-y-3"}>
        {comments?.replies?.map((reply) => (
          <CommentReplyItem key={reply.id} comment={reply} task={task} me={me} />
        ))}
      </div>
    </div>
  );
};

export default CommentReplyList;
