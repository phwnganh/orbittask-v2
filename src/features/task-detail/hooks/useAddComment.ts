import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {addCommentApi} from "@/features/task-detail/services/task-comment.api.ts";
import {activityKeys} from "@/features/task-detail/constants/activity-query-key.constant.ts";
import type { Activity } from "../types/activity.type";
import {useProfile} from "@/features/profile/hooks/useProfile.ts";

const sortActivitiesByCreatedAtDesc = (activities: Activity[]) =>
    [...activities].sort((a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

export const useAddComment = () => {
    const {set, cancel, invalidate} = useReactQueryClient()
    const {data: profile} = useProfile()
    return useMutation({
        mutationFn: ({task_id, content, parent_id}: {task_id: string, content: string, parent_id?: string}) => addCommentApi(task_id, content, parent_id),
        onMutate: async ({task_id, content}) => {
            if(!profile){
                throw new Error("Unauthenticated");
            }
            await cancel(activityKeys.list(task_id));
            const tempId = crypto.randomUUID();
            const optimisticActivity: Activity = {
                id: tempId,
                action_type: "comment",
                avatar_url: profile.avatar_url,
                first_name: profile.first_name,
                last_name: profile.last_name,
                metadata: {
                    content: content,
                },
                created_at: new Date().toISOString(),
            };
            set<Activity[]>(activityKeys.list(task_id), (old) => {
                if (!old) return [optimisticActivity];

                return sortActivitiesByCreatedAtDesc([
                    ...old,
                    optimisticActivity
                ]);
            });

            return {
                tempId,
            };
        },
        onError: (_error, _payload, context) => {
            if (!context) return;

            set<Activity[]>(activityKeys.list(_payload.task_id), (old) => {
                if (!old) return [];

                return old.filter(
                    activity => activity.id !== context.tempId
                );
            });
        },

        onSuccess: (result, _payload, context) => {
            if (!context) return;

            set<Activity[]>(activityKeys.list(_payload.task_id), (old) => {
                if (!old) return [];

                return sortActivitiesByCreatedAtDesc(old.map(activity =>
                    activity.id === context.tempId
                        ? {
                            ...activity,
                            ...result,
                            isPending: false,
                        }
                        : activity
                ));
            });
        },

        onSettled: (_data, _error, payload) => {
            void invalidate(
                activityKeys.list(payload.task_id)
            );
        }
    })
}