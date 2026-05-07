import type {InviteMemberPayload, RemoveMemberPayload} from "@/features/member/types/member.type.ts";
import {supabase} from "@/shared/libs/supabase.ts";

export const inviteMemberApi = async ({project_id, user_ids}: InviteMemberPayload) => {
    const {data: member, error} = await supabase.rpc("invite_members", {
        p_project_id: project_id,
        p_user_ids: user_ids
    })

    if(error){
        throw error;
    }
    return member;
}

export const removeMemberApi = async ({project_id, member_id}: RemoveMemberPayload) => {
    const {data: member, error} = await supabase.rpc("remove_member", {
        p_project_id: project_id,
        p_member_id: member_id,
    })

    if(error){
        throw error;
    }
    return member;
}

export const getProjectUsersApi = async ({project_id, search}: {project_id: string; search?: string}) => {
    const {data: users, error} = await supabase.rpc("get_project_users", {
        p_project_id: project_id,
        p_search: search || null
    })

    if(error){
        throw error;
    }
    return users;
}