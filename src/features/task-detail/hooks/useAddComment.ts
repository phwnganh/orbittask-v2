import { useReactQueryClient } from "@/shared/libs/react-query/query-client.ts";
import { useMutation } from "@tanstack/react-query";
import { addCommentApi } from "@/features/task-detail/services/task-comment.api.ts";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { commentKeys } from "../constants/comment-query-key.constant";
import type { Comment } from "../types/comment.type";

export const useAddComment = () => {
  const { get, set, cancel, invalidate } = useReactQueryClient();
  const { data: profile } = useProfile();
  return useMutation({
    mutationFn: ({
      task_id,
      content,
      parent_id,
    }: {
      task_id: string;
      content: string;
      parent_id?: string;
    }) => addCommentApi(task_id, content, parent_id),

    onMutate: async (payload) => {
      const queryKey = commentKeys.list(payload.task_id);

      await cancel(queryKey);

      const previousComments = get<Comment[]>(queryKey);

      const optimisticComment: Comment = {
        id: crypto.randomUUID(),
        task_id: payload.task_id,
        user_id: profile?.id ?? "",
        first_name: profile?.first_name ?? "",
        last_name: profile?.last_name ?? "",
        avatar_url: profile?.avatar_url ?? "",
        content: payload.content,
        parent_id: payload.parent_id ?? null,
        created_at: new Date().toISOString(),
      };

      set<Comment[]>(queryKey, (old) => {
        if (!old) {
          return [optimisticComment];
        }

        return [optimisticComment, ...old];
      });

      return { previousComments };
    },

    onError: (_error, payload, context) => {
      if (!context) return;

      set<Comment[]>(
        commentKeys.list(payload.task_id),
        context.previousComments ?? [],
      );
    },

    onSettled: async (_result, _error, payload) => {
      await invalidate(commentKeys.list(payload.task_id));
    },
  });
};
