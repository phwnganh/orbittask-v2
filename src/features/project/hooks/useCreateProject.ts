import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createProjectApi} from "@/features/project/services/project.api.ts";

export const useCreateProject = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createProjectApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["projects"]
            })
        },
        onError: error => {
            throw new Error(error.message)
        }
    })
}