import {useMutation} from "@tanstack/react-query";
import {deleteProjectApi} from "@/features/project/services/project.api.ts";
import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";
import type {Project} from "@/features/project/types/project.type.ts";

export const useDeleteProject = () => {
    const {get, set, cancel} = useReactQueryClient()
    return useMutation({
        mutationFn: ({projectId}: {projectId: string}) => deleteProjectApi(projectId),
        onMutate: async ({projectId}) => {
            await cancel(projectKeys.all)
            const previous = get<Project[]>(projectKeys.all)
            set<Project[]>(projectKeys.all, (old = []) => old.filter(p => p.id !== projectId))
            return {previous}
        },
        onError: (_err, _vars, context) => {
            set(projectKeys.all, () => context?.previous ?? [])
        }
    })
}