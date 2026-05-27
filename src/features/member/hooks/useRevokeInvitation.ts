import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {revokeInvitationApi} from "@/features/member/services/member.api.ts";
import {memberKeys} from "@/features/member/constants/member-query-key.constant.ts";
import type {Member} from "@/features/member/types/member.type.ts";

export const useRevokeInvitation = () => {
    const {getMany, setMany, cancel, invalidate, queryClient} = useReactQueryClient()

    return useMutation({
        mutationFn: ({project_id, user_id}: {project_id: string, user_id: string}) => revokeInvitationApi(project_id, user_id),
        onMutate: async ({project_id, user_id}) => {
            const queryKey = memberKeys.lists(project_id);

            await cancel(queryKey);

            const previousMembers = getMany<Member[]>(queryKey);

            setMany<Member[]>(
                queryKey,
                (old) => {

                    if (!old) return [];

                    return old.filter(
                        member =>
                            member.user_id !== user_id
                    );
                }
            );

            return {previousMembers};
        },
        onError: (_error, _var, context) => {
            context?.previousMembers?.forEach(
                ([queryKey, data]) => {
                    queryClient.setQueryData(
                        queryKey,
                        data
                    );
                }
            );
        },
        onSettled: (_data, _error, vars) => {
            void invalidate(memberKeys.lists(vars.project_id));
        }
    })
}