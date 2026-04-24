import {useMutation} from "@tanstack/react-query";
import {createProjectApi} from "@/features/project/services/project.api.ts";
import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";
import type {Project} from "@/features/project/types/project.type.ts";
import {useSession} from "@/features/auth/hooks/useSession.ts";

export const useCreateProject = () => {
    const {get, set, cancel} = useReactQueryClient()
    const {data: session} = useSession()
    const user = session?.user

    return useMutation({
        mutationFn: createProjectApi,
        onMutate: async (payload) => {
            if(!user) throw new Error("Unauthenticated")
            await cancel(projectKeys.all)

            const previous = get<Project[]>(projectKeys.all);
            const tempId = crypto.randomUUID()
            const optimisticProject = {
                id: tempId,
                title: payload.title,
                description: payload.description,
                owner_id: user.id,
                is_archived: false,
                created_at: new Date().toISOString(),
            }

            set<Project[]>(projectKeys.all, (old = []) => [
                ...old,
                optimisticProject
            ]);

            return {previous, tempId}
        },
        onError: (_err, _vars, context) => {
            set(projectKeys.all, () => context?.previous ?? [])
        },
        onSuccess: (result, _vars, context) => {
            set<Project[]>(projectKeys.all, (old = []) => old.map(p => p.id === context?.tempId ? result : p))
        }
    })
}