import {supabase} from "@/shared/libs/supabase.ts";
import {DASHBOARD, SUCCESSFUL_VERIFIED_ACCOUNT} from "@/shared/constants/route.constant.ts";
import type {LoginPayload, RegisterPayload} from "@/features/auth/types/auth.type.ts";

const AppUrl = import.meta.env.VITE_APP_URL
export const registerApi = async (payload: RegisterPayload) => {
    const {email, password, first_name, last_name} = payload
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: first_name,
                last_name: last_name,
            },
            emailRedirectTo: `${AppUrl}${SUCCESSFUL_VERIFIED_ACCOUNT}`
        }
    })

    if(error){
        throw error
    }
    return data
}
export const loginApi = async (payload: LoginPayload) => {
    const {email, password} = payload
    const {data, error} = await supabase.auth.signInWithPassword({email, password})
    if(error){
        throw error
    }
    return data;
}

export const loginWithGoogleApi = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${AppUrl}${DASHBOARD}`,
        }
    })
    if(error){
        throw error
    }
    return data
}