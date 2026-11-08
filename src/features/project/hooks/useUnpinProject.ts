import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {unpinProjectApi} from "@/features/project/services/project.api.ts";
import {projectPinKeys} from "@/features/project/constants/project-pin-query-key.constant.ts";
import type {ProjectPin} from "@/features/project/types/project-pins.type.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";

export const useUnpinProject = () => {
    const {set, cancel, invalidate} = useReactQueryClient()

    return useMutation({
        mutationFn: ({project_id}: {project_id: string}) => unpinProjectApi(project_id),
        onMutate: async ({project_id}) => {
            await cancel(projectPinKeys.lists())

            set<ProjectPin[]>(projectPinKeys.lists(), (old = []) =>
            old.filter(pin => pin.project.id !== project_id))

            return {project_id}
        },
        onError: () => {
            void invalidate(projectPinKeys.lists())
        },
        onSettled: () => {
            void invalidate(projectPinKeys.lists())
            void invalidate(projectKeys.lists())
        }
    })
}