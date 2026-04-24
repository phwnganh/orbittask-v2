import {useMutation} from "@tanstack/react-query";
import {updateProjectApi} from "@/features/project/services/project.api.ts";
import type {ProjectFormValues} from "@/features/project/components/project-form/project.schema.ts";
import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";
import type {Project} from "@/features/project/types/project.type.ts";

export const useUpdateProject = () => {
    const {get, set, cancel} = useReactQueryClient()
    return useMutation({
        mutationFn: ({projectId, payload}: {projectId: string; payload: ProjectFormValues}) => updateProjectApi(projectId, payload),
        onMutate: async ({projectId, payload}) => {
            await cancel(projectKeys.all)

            const previous = get<Project[]>(projectKeys.all);

            set<Project[]>(projectKeys.all, (old = []) => old.map(p => p.id === projectId ? {...p, ...payload} : p))

            return {previous, projectId};
        },

        onError: (_err, _vars, context) => {
            set(projectKeys.all, () => context?.previous ?? [])
        },
        onSuccess: (updatedProject, _vars, context) => {
            set<Project[]>(projectKeys.all, (old = []) => old.map(p => p.id === context?.projectId ? updatedProject : p))
        },
    })
}