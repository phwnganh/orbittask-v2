import type {
  Comment,
  CommentWithReplies,
} from "@/features/task-detail/types/comment.type.ts";

export const commentWithReplies = (
  comments: Comment[],
): CommentWithReplies[] => {
  const visibleComments = comments.filter(
    (comment) => comment.deleted_at === null,
  );
  const parentComments = visibleComments.filter(
    (comment) => comment.parent_id === null,
  );

  return parentComments.map((comment) => ({
    ...comment,
    replies: visibleComments.filter((reply) => reply.parent_id === comment.id),
  }));
};
