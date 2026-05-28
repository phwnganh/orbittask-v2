import type {ProjectFormValues} from "@/features/project/schemas/project.schema.ts";
import {supabase} from "@/shared/libs/supabase.ts";
import {getCurrentUserApi} from "@/features/auth/services/auth.api.ts";
import type {ProjectResponse} from "@/features/project/types/project.type.ts";

export const createProjectApi = async (payload: ProjectFormValues) => {
    const user = await getCurrentUserApi()
    const {data: project, error} = await supabase.from("Projects").insert({
        title: payload.title,
        description: payload.description,
        owner_id: user.id
    }).select().single();

    if(error){
        throw error;
    }
    return project;
}

export const updateProjectApi = async (project_id: string, payload: ProjectFormValues)=> {
    const {data: project, error} = await supabase.from("Projects").update({
        title: payload.title,
        description: payload.description,
    }).eq("id", project_id).select().single();

    if(error){
        throw error;
    }
    return project;
}

export const deleteProjectApi = async (project_id: string) => {
    const {data: project, error} = await supabase.from("Projects").delete().eq("id", project_id).select().single();
    if(error){
        throw error;
    }
    return project;
}

export const getAllProjectsApi = async ({search, page, pageSize, ownership, relevance, status, sort}: {search?: string; page: number; pageSize: number; ownership: string; relevance: string; status: string; sort: string}): Promise<ProjectResponse> => {
    const {data, error} = await supabase.rpc("get_all_projects", {
        p_search: search ?? null,
        p_page: page,
        p_page_size: pageSize,
        p_ownership: ownership ?? 'all',
        p_relevance: relevance ?? 'all',
        p_status: status ?? 'all',
        p_sort: sort ?? 'smart',
    })
    if(error){
        throw error;
    }

    const projects = data ?? [];
    const total = data && data.length > 0 ? data[0].total_count : 0;

    return {
        data: projects,
        total
    };
}

export const getProjectDetailApi = async (project_id: string)=> {
    const {data, error} = await supabase.from("Projects").select("*").eq("id", project_id).single();

    if(error){
        throw error;
    }
    return data;
}

export const pinProjectApi = async (project_id: string) => {
    const {data: projects, error} = await supabase.from("ProjectPins").insert({project_id}).select().single()

    if(error){
        throw error;
    }
    return projects;
}

export const unpinProjectApi = async (project_id: string) => {
    const {data: projects, error} = await supabase.from("ProjectPins").delete().eq("project_id", project_id)
    if(error){
        throw error;
    }
    return projects;
}

export const getPinnedProjectsApi = async () => {
    const {data: projects, error} = await supabase.from("ProjectPins").select(`pinned_at, project:project_id(
    id,
    title,
    description,
    created_at)`).order("pinned_at", {ascending: false})

    if(error){
        throw error;
    }
    return projects;
}