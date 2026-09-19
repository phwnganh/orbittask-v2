import PencilIcon from "@/assets/icons/pencil-icon.svg?react";
import TrashIcon from "@/assets/icons/trash-icon.svg?react";
import ReplyIcon from "@/assets/icons/reply-icon.svg?react";
type CommentActivityActionsProps = {
  onReply?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};
const CommentActivityActions = ({
  onReply,
  onEdit,
  onDelete,
}: CommentActivityActionsProps) => {
  return (
    <div
      className={
        "absolute right-2 top-2 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100"
      }
    >
      {onReply && (
        <button
          type={"button"}
          onClick={onReply}
          className={
            "rounded p-1.5 text-text-secondary hover:bg-bg-tertiary hover:text-text-primary"
          }
        >
          <ReplyIcon className={"h-3 w-3 shrink-0"} />
        </button>
      )}

      {onEdit && (
        <button
          type={"button"}
          onClick={onEdit}
          className={
            "rounded p-1.5 text-text-secondary hover:bg-bg-tertiary hover:text-text-primary"
          }
        >
          <PencilIcon className={"h-3 w-3 shrink-0"} />
        </button>
      )}

      {onDelete && (
        <button
          type={"button"}
          onClick={onDelete}
          className={
            "rounded p-1.5 text-text-secondary hover:bg-bg-tertiary hover:text-text-primary"
          }
        >
          <TrashIcon className={"h-3 w-3 shrink-0"} />
        </button>
      )}
    </div>
  );
};

export default CommentActivityActions;
