import {supabase} from "@/shared/libs/supabase.ts";

export const getProfileByUserIdApi = async (userId: string) => {
    return supabase.from("Profile").select("*").eq("id", userId).single();
}