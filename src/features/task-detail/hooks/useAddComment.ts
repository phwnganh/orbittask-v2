import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useSession} from "@/features/auth/hooks/useSession.ts";
import {useMutation} from "@tanstack/react-query";
import {addCommentApi} from "@/features/task-detail/services/task-comment.api.ts";
import {commentKeys} from "@/features/task-detail/constants/comment-query-key.constant.ts";
import type {Comment} from "@/features/task-detail/types/comment.type.ts";

export const useAddComment = () => {
    const {set, cancel, invalidate} = useReactQueryClient()
    const {data: session} = useSession()
    const user = session?.user
    return useMutation({
        mutationFn: ({task_id, content, parent_id}: {task_id: string, content: string, parent_id?: string}) => addCommentApi(task_id, content, parent_id),
        onMutate: async ({task_id, content, parent_id}) => {
            if(!user){
                throw new Error("Unauthenticated");
            }
            await cancel(commentKeys.list(task_id));
            const tempId = crypto.randomUUID();
            const optimisticComment: Comment = {
                id: tempId,
                task_id: task_id,
                user_id: user.id,
                content: content,
                parent_id: parent_id ?? null,
                created_at: new Date().toISOString(),
            };

            set<Comment[]>(commentKeys.list(task_id), (old) => {
                if (!old) return [optimisticComment];

                return [
                    ...old,
                    optimisticComment
                ];
            });

            return {
                tempId,
            };
        },
        onError: (_error, _payload, context) => {
            if (!context) return;

            set<Comment[]>(commentKeys.list(_payload.task_id), (old) => {
                if (!old) return [];

                return old.filter(
                    comment => comment.id !== context.tempId
                );
            });
        },

        onSuccess: (result, _payload, context) => {
            if (!context) return;

            set<Comment[]>(commentKeys.list(_payload.task_id), (old) => {
                if (!old) return [];

                return old.map(comment =>
                    comment.id === context.tempId
                        ? result
                        : comment
                );
            });
        },

        onSettled: (_data, _error, payload) => {
            void invalidate(
                commentKeys.list(payload.task_id)
            );
        }
    })
}