import {supabase} from "@/shared/libs/supabase.ts";
import type {Profile} from "@/features/auth/types/auth.type.ts";

export const getProfileByUserIdApi = async (userId: string): Promise<Profile | null> => {
    const {data} = await supabase.from("Profile").select("*").eq("id", userId).single()
    return data;
}