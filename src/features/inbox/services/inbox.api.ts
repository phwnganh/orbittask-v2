import {supabase} from "@/shared/libs/supabase.ts";

export const getInboxTasksApi = async (filter: string, sort: string) => {
    const {data: inbox, error} = await supabase.rpc("get_inbox_tasks", {
        p_filter: filter,
        p_sort: sort
    })
    if(error){
        throw error
    }
    return inbox
}