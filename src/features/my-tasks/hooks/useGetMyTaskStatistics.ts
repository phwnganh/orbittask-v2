import {useQuery} from "@tanstack/react-query";
import {getMyTaskStatisticsApi} from "@/features/my-tasks/services/my-task.api.ts";
import { myTaskKeys } from "../constants/my-task-query-key.constant";

export const useGetMyTaskStatistics = () => {
    return useQuery({
        queryKey: myTaskKeys.myTaskStatistics(),
        queryFn: getMyTaskStatisticsApi
    })
}