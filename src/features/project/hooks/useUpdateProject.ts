import {useMutation} from "@tanstack/react-query";
import {updateProjectApi} from "@/features/project/services/project.api.ts";
import type {ProjectFormValues} from "@/features/project/schemas/project.schema.ts";
import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";
import type {ProjectResponse} from "@/features/project/types/project.type.ts";

export const useUpdateProject = () => {
    const {setMany, cancel, invalidate} = useReactQueryClient()
    return useMutation({
        mutationFn: ({projectId, payload}: {projectId: string; payload: ProjectFormValues}) => updateProjectApi(projectId, payload),
        onMutate: async ({projectId, payload}) => {
            await cancel(projectKeys.lists())

            setMany(projectKeys.lists(), (old: ProjectResponse | undefined) => {
                if(!old) return old

                return {
                    ...old,
                    data: old.data.map(p => p.id === projectId ? {
                        ...p,
                        ...payload
                    } : p)
                }
            })

            return {projectId};
        },

        onError: (_err, _vars) => {
            void invalidate(projectKeys.lists())
        },
        onSettled: () => {
            void invalidate(projectKeys.lists());
        },
    })
}