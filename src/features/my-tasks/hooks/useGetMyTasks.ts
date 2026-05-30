import {useQuery} from "@tanstack/react-query";
import {getMyTasksApi} from "@/features/my-tasks/services/my-task.api.ts";

export const useGetMyTasks = () => {
    return useQuery({
        queryKey: ["my-tasks"],
        queryFn: getMyTasksApi,
    })
}