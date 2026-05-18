import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMemberFilterStore} from "@/features/member/stores/member-filter.store.ts";
import {useMutation} from "@tanstack/react-query";
import {revokeInvitationApi} from "@/features/member/services/member.api.ts";
import {memberKeys} from "@/features/member/constants/member-query-key.constant.ts";
import type {Member} from "@/features/member/types/member.type.ts";

export const useRevokeInvitation = () => {
    const {get, set, cancel, invalidate} = useReactQueryClient()
    const {search} = useMemberFilterStore()

    return useMutation({
        mutationFn: ({project_id, user_id}: {project_id: string, user_id: string}) => revokeInvitationApi(project_id, user_id),
        onMutate: async ({project_id, user_id}) => {
            const queryKey = memberKeys.list({project_id, invite_status: "pending", search})

            await cancel(queryKey);

            const previousMembers = get<Member[]>(queryKey);

            set<Member[]>(
                queryKey,
                (old) => {

                    if (!old) return [];

                    return old.filter(
                        member =>
                            member.user_id !== user_id
                    );
                }
            );

            return {previousMembers, queryKey};
        },
        onError: (_error, _var, context) => {
            if(!context?.previousMembers) return;

            set(context.queryKey, context.previousMembers)
        },
        onSettled: (_data, _error, vars) => {
            void invalidate(memberKeys.list({
                project_id: vars.project_id,
                invite_status: "pending",
                search,
            }))
        }
    })
}