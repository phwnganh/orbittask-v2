import Textarea from "@/shared/components/inputs/Textarea.tsx";
import Button from "@/shared/components/button/Button.tsx";
import { useEffect, useRef, useState } from "react";
import { useAddComment } from "@/features/task-detail/hooks/useAddComment.ts";
import type { Task } from "@/features/task/types/task.type.ts";
import type { CommentWithReplies } from "@/features/task-detail/types/comment.type";

type TaskCommentInputProps = {
  task: Task;
  replyingTo?: CommentWithReplies | null;
  onReplyComment?: () => void;
};
const TaskCommentInput = ({
  task,
  replyingTo,
  onReplyComment,
}: TaskCommentInputProps) => {
  const [commentInput, setCommentInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { mutate } = useAddComment();

  const isReplying = !!replyingTo;

  useEffect(() => {
    if (!replyingTo) {
      return;
    }
    const name = [replyingTo.first_name, replyingTo.last_name]
      .filter(Boolean)
      .join(" ");

    setCommentInput(`@${name} `);

    requestAnimationFrame(() => {
      const textarea = textareaRef.current;

      if (!textarea) return;

      textarea.focus();

      const length = textarea.value.length;
      textarea.setSelectionRange(length, length);
    });
  }, [replyingTo?.id]);
  const handleSubmitComment = () => {
    mutate(
      {
        task_id: task.id,
        content: commentInput.trim(),
        parent_id: replyingTo?.id ?? null,
      },
      {
        onSuccess: () => {
          setCommentInput("");
          if (isReplying) {
            onReplyComment?.();
          }
          // keep focus after being back to comment mode
          requestAnimationFrame(() => {
            textareaRef.current?.focus();
          });
        },
      },
    );
  };
  return (
    <div className={"space-y-2"}>
      <Textarea
        ref={textareaRef}
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        placeholder={isReplying ? "" : "Write a comment..."}
        rows={3}
        className={"resize-none"}
      />
      <div className={"flex justify-end"}>
        {isReplying && (
          <Button
            className={"mr-3"}
            onClick={() => {
              setCommentInput("");
              onReplyComment?.();
            }}
            fullWidth={false}
            variant={"secondary"}
          >
            Cancel
          </Button>
        )}
        <Button
          disabled={!commentInput.trim()}
          type={"button"}
          fullWidth={false}
          className={"w-full sm:w-auto"}
          onClick={handleSubmitComment}
        >
          {isReplying ? "Reply" : "Comment"}
        </Button>
      </div>
    </div>
  );
};

export default TaskCommentInput;
