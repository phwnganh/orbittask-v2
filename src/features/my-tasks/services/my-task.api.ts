import {supabase} from "@/shared/libs/supabase.ts";
import type {MyTask, MyTaskStatus} from "@/features/my-tasks/types/my-task.type.ts";

export const getMyTasksApi = async (): Promise<MyTask[]> => {
    const {data: tasks, error} = await supabase.rpc("get_my_tasks")

    if (error){
        throw error;
    }
    return tasks;
}

export const getMyTaskStatisticsApi = async (): Promise<MyTaskStatus> => {
    const {data: statistics, error} = await supabase.rpc("get_my_tasks_status")

    if (error){
        throw error;
    }
    return statistics[0];
}