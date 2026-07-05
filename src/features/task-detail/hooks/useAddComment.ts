import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useSession} from "@/features/auth/hooks/useSession.ts";
import {useMutation} from "@tanstack/react-query";
import {addCommentApi} from "@/features/task-detail/services/task-comment.api.ts";
import {activityKeys} from "@/features/task-detail/constants/activity-query-key.constant.ts";
import type { Activity } from "../types/activity.type";

export const useAddComment = () => {
    const {set, cancel, invalidate} = useReactQueryClient()
    const {data: session} = useSession()
    const user = session?.user
    return useMutation({
        mutationFn: ({task_id, content, parent_id}: {task_id: string, content: string, parent_id?: string}) => addCommentApi(task_id, content, parent_id),
        onMutate: async ({task_id, content}) => {
            if(!user){
                throw new Error("Unauthenticated");
            }
            await cancel(activityKeys.list(task_id));
            const tempId = crypto.randomUUID();
            const metadata = (user.user_metadata ?? {}) as {
                avatar_url?: string;
                first_name?: string;
                last_name?: string;
            };
            const optimisticActivity: Activity = {
                id: tempId,
                action_type: "comment",
                avatar_url: metadata.avatar_url,
                first_name: metadata.first_name,
                last_name: metadata.last_name,
                metadata: {
                    content: content,
                },
                created_at: new Date().toISOString(),
            };

            set<Activity[]>(activityKeys.list(task_id), (old) => {
                if (!old) return [optimisticActivity];

                return [
                    ...old,
                    optimisticActivity
                ];
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

                return old.map(activity =>
                    activity.id === context.tempId
                        ? (result as Activity)
                        : activity
                );
            });
        },

        onSettled: (_data, _error, payload) => {
            void invalidate(
                activityKeys.list(payload.task_id)
            );
        }
    })
}