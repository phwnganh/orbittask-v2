import {useMutation} from "@tanstack/react-query";
import {createProjectApi} from "@/features/project/services/project.api.ts";
import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";
import type { ProjectResponse} from "@/features/project/types/project.type.ts";
import {useSession} from "@/features/auth/hooks/useSession.ts";

export const useCreateProject = () => {
    const {setMany, cancel, invalidate} = useReactQueryClient()
    const {data: session} = useSession()
    const user = session?.user

    return useMutation({
        mutationFn: createProjectApi,
        onMutate: async (payload) => {
            if(!user) throw new Error("Unauthenticated")
            await cancel(projectKeys.lists())

            const tempId = crypto.randomUUID()
            const optimisticProject = {
                id: tempId,
                title: payload.title,
                description: payload.description,
                owner_id: user.id,
                is_archived: false,
                created_at: new Date().toISOString(),
            }

            setMany(projectKeys.lists(), (old: ProjectResponse | undefined) => {
                if(!old) return old

                return {
                    ...old,
                    data: [optimisticProject, ...old.data],
                    total: old.total + 1
                }
            })

            return {tempId}
        },
        onError: (_err, _vars) => {
            void invalidate(projectKeys.lists())
        },
        onSuccess: (result, _vars, context) => {
            setMany(projectKeys.lists(), (old: ProjectResponse | undefined) => {
                if(!old) return old

                return {
                    ...old,
                    data: old.data.map(p => p.id === context.tempId ? result : p)
                }
            })
        },
        onSettled: () => {
            void invalidate(projectKeys.lists())
        }
    })
}