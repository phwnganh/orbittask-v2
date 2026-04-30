import {useMutation} from "@tanstack/react-query";
import {deleteProjectApi} from "@/features/project/services/project.api.ts";
import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";
import type {ProjectResponse} from "@/features/project/types/project.type.ts";

export const useDeleteProject = () => {
    const {setMany, invalidate, cancel} = useReactQueryClient()
    return useMutation({
        mutationFn: ({projectId}: {projectId: string}) => deleteProjectApi(projectId),
        onMutate: async ({projectId}) => {
            await cancel(projectKeys.lists())
            setMany(projectKeys.lists(), (old: ProjectResponse | undefined) => {
                if(!old) return old

                return {
                    ...old,
                    data: old.data.filter(p => p.id !== projectId),
                    total: old.total - 1
                }
            })
            return {projectId}
        },
        onError: () => {
            void invalidate(projectKeys.lists());
        },

        onSettled: () => {
            void invalidate(projectKeys.lists());
        },
    })
}