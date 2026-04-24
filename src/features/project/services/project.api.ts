import type {ProjectFormValues} from "@/features/project/components/project-form/project.schema.ts";
import {supabase} from "@/shared/libs/supabase.ts";
import {getCurrentUserApi} from "@/features/auth/services/auth.api.ts";
import type {Project} from "@/features/project/types/project.type.ts";

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

export const getAllProjectsApi = async (): Promise<Project[]> => {
    const {data, error} = await supabase.from("Projects").select("*");
    if(error){
        throw error;
    }
    return data;
}