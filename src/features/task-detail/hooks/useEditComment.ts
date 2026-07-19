import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {editCommentApi} from "@/features/task-detail/services/task-comment.api.ts";
import {activityKeys} from "@/features/task-detail/constants/activity-query-key.constant.ts";
import type {Activity} from "@/features/task-detail/types/activity.type.ts";

export const useEditComment = () => {
    const {set, cancel, invalidate} = useReactQueryClient()
    return useMutation({
        mutationFn: ({task_id, comment_id, content}: {task_id: string, comment_id: string, content: string}) => editCommentApi(task_id, comment_id, content),
        onMutate: async ({task_id, comment_id, content}) => {
            await cancel(activityKeys.list(task_id));

            let previousComment: string | undefined = undefined;

            set<Activity[]>(activityKeys.list(task_id), old => {
                if(!old) return [];

                return old.map(activity => {
                    if(activity.action_type === "comment" &&
                    activity.metadata.comment_id === comment_id){
                        previousComment = activity.metadata.content;

                        return {
                            ...activity,
                            metadata: {
                                ...activity.metadata,
                                content
                            }
                        }
                    }
                    return activity;
                })
            })
            return {previousComment};
        },
        onError: (_error, _payload, context) => {
            if(!context) return;

            set<Activity[]>(activityKeys.list(_payload.task_id), old => {
                if(!old) return [];

                return old.map(activity => {
                    if(activity.action_type === "comment" &&
                    activity.metadata.comment_id === _payload.comment_id){
                        return {
                            ...activity,
                            metadata: {
                                ...activity.metadata,
                                content: context.previousComment
                            }
                        }
                    }
                    return activity;
                })
            })
        },
        onSettled: (_, __, payload) => {
            void invalidate(activityKeys.list(payload.task_id))
        }
    })
}