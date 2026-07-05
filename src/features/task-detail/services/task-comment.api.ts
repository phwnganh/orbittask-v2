import {supabase} from "@/shared/libs/supabase.ts";

export const addCommentApi = async (task_id: string, content: string, parent_id?: string) => {
    const {data: comment, error} = await supabase.rpc("create_comment", {
        p_task_id: task_id,
        p_content: content,
        p_parent_id: parent_id ?? null,
    })
    if (error) {
        throw error;
    }
    return comment
}

export const removeCommentApi = async (comment_id: string, task_id: string) => {
    const {data: comment, error} = await supabase.rpc("remove_comment", {
        p_comment_id: comment_id,
        p_task_id: task_id,
    })
    if (error) {
        throw error;
    }
    return comment
}