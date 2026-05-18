import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {removeMemberFromProjectApi} from "@/features/member/services/member.api.ts";
import {memberKeys} from "@/features/member/constants/member-query-key.constant.ts";
import type {Member} from "@/features/member/types/member.type.ts";
import {useMemberFilterStore} from "@/features/member/stores/member-filter.store.ts";

export const useRemoveMemberFromProject = () => {
    const {get, set, invalidate, cancel} = useReactQueryClient()
    const {search} = useMemberFilterStore()
    return useMutation({
        mutationFn: ({project_id, member_id}: {project_id: string, member_id: string}) => removeMemberFromProjectApi({
            project_id,
            member_id
        }),
        onMutate: async ({project_id, member_id}) => {
            const queryKey = memberKeys.list({project_id, invite_status: "accepted", search})
            await cancel(queryKey);

            const previousMembers = get<Member[]>(queryKey)

            set<Member[]>(queryKey, old => {
                if(!old) return [];

                return old.filter(member => member.user_id !== member_id)
            })

            return {
                previousMembers,
                queryKey,
            }
        },
        onError: (_error, _vars, context) => {
            if(!context?.previousMembers){
                return;
            }
            set(context.queryKey, context.previousMembers)
        },
        onSettled: (_data, _error, vars) => {
            void invalidate(memberKeys.list({
                project_id: vars.project_id,
                invite_status: "accepted",
                search,
            }))
        }
    })
}