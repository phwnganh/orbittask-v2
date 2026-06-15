import {useQuery} from "@tanstack/react-query";
import {activityKeys} from "@/features/task-detail/constants/activity-query-key.constant.ts";
import {getAllActivitiesApi} from "@/features/task-detail/services/task-activity.api.ts";
import type {Activity} from "@/features/task-detail/types/activity.type.ts";

export const useViewActivities = (task_id: string) => {
    const {data, isLoading, error} = useQuery<Activity[]>({
        queryKey: activityKeys.list(task_id),
        queryFn: () => getAllActivitiesApi(task_id),
        initialData: []
    });

    return {data, isLoading, error};
};