import {useQuery} from "@tanstack/react-query";
import {getMyTaskStatisticsApi} from "@/features/my-tasks/services/my-task.api.ts";

export const useGetMyTaskStatistics = () => {
    return useQuery({
        queryKey: ["my-tasks-statistics"],
        queryFn: getMyTaskStatisticsApi
    })
}