import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {removeCommentApi} from "@/features/task-detail/services/task-comment.api.ts";
import {activityKeys} from "@/features/task-detail/constants/activity-query-key.constant.ts";
import type {Activity} from "@/features/task-detail/types/activity.type.ts";

export const useRemoveComment = () => {
    const {setMany, invalidate, cancel} = useReactQueryClient()
    return useMutation({
        mutationFn: ({commentId, taskId}: {commentId: string, taskId: string}) => removeCommentApi(commentId, taskId),
        onMutate: async ({commentId, taskId}) => {
            await cancel(activityKeys.list(taskId));
            setMany(activityKeys.list(taskId), (old?: Activity[]) => {
                if(!old) return old;

                return old.map((activity): Activity => {
                    if(activity.metadata.comment_id !== commentId) {
                        return activity;
                    }

                    return {
                        ...activity,
                        action_type: "comment_deleted",
                        metadata: {
                            ...activity.metadata,
                            content: ""
                        }
                    }
                })
            })
        },
        onError: (_, context) => {
            void invalidate(activityKeys.list(context.taskId))
        },
        onSettled: (_, __, context) => {
            void invalidate(activityKeys.list(context.taskId))
        }
    })
}