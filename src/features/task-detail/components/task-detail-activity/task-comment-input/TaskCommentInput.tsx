import Textarea from "@/shared/components/inputs/Textarea.tsx";
import Button from "@/shared/components/button/Button.tsx";
import { useEffect, useRef, useState } from "react";
import { useAddComment } from "@/features/task-detail/hooks/useAddComment.ts";
import type { Task } from "@/features/task/types/task.type.ts";
import type { CommentWithReplies } from "@/features/task-detail/types/comment.type";

type TaskCommentInputProps = {
  task: Task;
  replyingTo?: CommentWithReplies | null;
};
const TaskCommentInput = ({ task, replyingTo }: TaskCommentInputProps) => {
  const [commentInput, setCommentInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { mutate } = useAddComment();

  const isReplying = !!replyingTo;

  useEffect(() => {
    if (isReplying) {
      textareaRef.current?.focus();
    }
  }, [isReplying]);
  const handleSubmitComment = () => {
    mutate({
      task_id: task.id,
      content: commentInput.trim(),
      parent_id: replyingTo?.id ?? null,
    });
    setCommentInput("");
  };
  return (
    <div className={"space-y-2"}>
      <Textarea
        ref={textareaRef}
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        placeholder={isReplying ? "Write a reply..." : "Write a comment..."}
        rows={3}
      />
      <div className={"flex justify-end"}>
        <Button
          disabled={!commentInput.trim()}
          type={"button"}
          fullWidth={false}
          onClick={handleSubmitComment}
        >
          {isReplying ? "Reply" : "Comment"}
        </Button>
      </div>
    </div>
  );
};

export default TaskCommentInput;
