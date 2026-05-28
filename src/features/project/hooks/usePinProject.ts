import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {pinProjectApi} from "@/features/project/services/project.api.ts";
import type {Project} from "@/features/project/types/project.type.ts";
import {projectPinKeys} from "@/features/project/constants/project-pin-query-key.constant.ts";
import type {ProjectPin} from "@/features/project/types/project-pins.type.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";
export const usePinProject = () => {
    const {set, cancel, invalidate} = useReactQueryClient()
    return useMutation({
        mutationFn: ({project}: {project: Project}) => pinProjectApi(project.id),
        onMutate: async ({project}) => {
            await cancel(projectPinKeys.lists())

            const optimisticPin: ProjectPin = {
                id: crypto.randomUUID(),
                user_id: "",
                pinned_at: new Date().toISOString(),
                project: {
                    id: project.id,
                    title: project.title,
                    description: project.description,
                    created_at: project.created_at
                }
            }
            set<ProjectPin[]>(projectPinKeys.list(), (old = []) => [optimisticPin, ...old])
            return {
                optimisticPin: optimisticPin.id
            }
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