import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {inviteMemberApi} from "@/features/member/services/member.api.ts";
import {memberKeys} from "@/features/member/constants/member-query-key.constant.ts";
import type {MemberResponse} from "@/features/member/types/member.type.ts";
import {useMemberStore} from "@/features/member/stores/member.store.ts";

export const useInviteMember = () => {
    const {getMany, setMany, cancel, invalidate, queryClient} = useReactQueryClient()

    return useMutation({
        mutationFn: inviteMemberApi,
        onMutate: async (payload) => {
            await cancel(memberKeys.lists(payload.project_id))
            const previousMembers = getMany<MemberResponse[]>(memberKeys.lists(payload.project_id))
            const {selectedUsers} = useMemberStore.getState()
            const optimisticMembers: MemberResponse[] = payload.user_ids.map(userId => {
                const selectedUser = selectedUsers.find(user => user.user_id === userId)!;
                return {
                    user_id: selectedUser.user_id,
                    avatar_url: selectedUser.avatar_url,
                    first_name: selectedUser.first_name,
                    last_name: selectedUser.last_name,
                    email: selectedUser.email,
                    role: "member",
                    invite_status: "pending"
                }
                }
            )

            setMany<MemberResponse[]>(memberKeys.lists(payload.project_id), old => {
                if(!old) return old;
                const filteredOptimisticMembers = optimisticMembers.filter(member => !old.some(m => m.user_id === member.user_id))

                return [
                    ...old,
                    ...filteredOptimisticMembers
                ]
            })

            return {previousMembers}
        },
        onError: (_err, _vars, context) => {
            context?.previousMembers?.forEach(
                ([queryKey, data]) => {
                    queryClient.setQueryData(
                        queryKey,
                        data
                    );
                }
            );
        },
        onSettled: (_data, _err, vars) => {
            void invalidate(memberKeys.lists(vars.project_id))
        }
    })
}