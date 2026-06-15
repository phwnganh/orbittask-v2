import {supabase} from "@/shared/libs/supabase.ts";

export const getAllActivitiesApi = async (task_id: string) => {
    const {data: activities, error} = await supabase.rpc("get_task_activities", {
        p_task_id: task_id,
    })

    if(error){
        throw error;
    }
    return activities;
}