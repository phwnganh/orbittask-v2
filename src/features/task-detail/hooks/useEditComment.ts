import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {editCommentApi} from "@/features/task-detail/services/task-comment.api.ts";
import {commentKeys} from "@/features/task-detail/constants/comment-query-key.constant.ts";
import type {Comment} from "@/features/task-detail/types/comment.type.ts";

export const useEditComment = () => {
    const {get, set, cancel, invalidate} = useReactQueryClient()
    return useMutation({
        mutationFn: ({task_id, comment_id, content}: {task_id: string, comment_id: string, content: string}) => editCommentApi(task_id, comment_id, content),
        onMutate: async ({task_id, comment_id, content}) => {
            await cancel(commentKeys.list(task_id));

            const previousComments = get<Comment[]>(commentKeys.list(task_id));

            set<Comment[]>(commentKeys.list(task_id), old => {
                if (!old) return [];

                return old.map(comment => {
                    if (comment.id === comment_id){
                        return {
                            ...comment,
                            content,
                            updated_at: new Date().toISOString()
                        }
                    }
                    return comment
                })
            })

            return {previousComments}
        },
        onError: (_error, _payload, context) => {
            if(!context?.previousComments) return;

            set<Comment[]>(commentKeys.list(_payload.task_id), context.previousComments)
        },
        onSettled: (_, __, payload) => {
            void invalidate(commentKeys.list(payload.task_id))
        }
    })
}