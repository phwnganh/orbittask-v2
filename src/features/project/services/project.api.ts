import type {ProjectFormValues} from "@/features/project/components/project-form/project.schema.ts";
import {supabase} from "@/shared/libs/supabase.ts";
import {getCurrentUserApi} from "@/features/auth/services/auth.api.ts";

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