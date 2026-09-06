import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {removeCommentApi} from "@/features/task-detail/services/task-comment.api.ts";
import {commentKeys} from "@/features/task-detail/constants/comment-query-key.constant.ts";
import type {Comment} from "@/features/task-detail/types/comment.type.ts";

export const useRemoveComment = () => {
    const {set, get, invalidate, cancel} = useReactQueryClient()
    return useMutation({
        mutationFn: ({commentId, taskId}: {commentId: string, taskId: string}) => removeCommentApi(commentId, taskId),
        onMutate: async ({commentId, taskId}) => {
            await cancel(commentKeys.list(taskId));
            const previousComments = get<Comment[]>(commentKeys.list(taskId));

            set<Comment[]>(commentKeys.list(taskId), old => {
                if (!old) return [];
               return old.filter(comment => comment.id !== commentId)
            })
            return {previousComments}
        },
        onError: (
            _error,
            payload,
            context
        ) => {
            if (!context?.previousComments) return;

            set<Comment[]>(
                commentKeys.list(payload.taskId),
                context.previousComments
            );
        },
        onSettled: (_, __, context) => {
            void invalidate(commentKeys.list(context.taskId))
        }
    })
}