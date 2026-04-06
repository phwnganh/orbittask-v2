import type {LoginPayload, RegisterPayload} from "@/types/user.type.ts";
import {supabase} from "@/libs/supabase.ts";
import {SUCCESSFUL_VERIFIED_ACCOUNT} from "@/constants/route.constant.ts";
import {useAuthStore} from "@/stores/auth.store.ts";

const mapRegisterError = (message: string) => {
    if (message.includes("User already registered")) {
        return "Email already exists";
    }

    if (message.includes("Password should be at least")) {
        return "Password must be at least 8 characters";
    }

    return "Something went wrong. Please try again.";
};

const mapLoginError = (message: string) => {
    if (message.includes("Invalid login credentials")) {
        return "Email or password is incorrect";
    }
    return "Something went wrong. Please try again.";
}
export const apiRegister = async (payload: RegisterPayload) => {
    const {email, password, first_name, last_name} = payload
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: first_name,
                last_name: last_name,
            },
            emailRedirectTo: `http://localhost:5173${SUCCESSFUL_VERIFIED_ACCOUNT}`
        }
    })

    if(error){
        throw new Error(mapRegisterError(error.message))
    }
    return data
}
export const apiLogin = async (payload: LoginPayload) => {
    const {email, password} = payload
    const {data, error} = await supabase.auth.signInWithPassword({email, password})
    if(error){
        throw new Error(mapLoginError(error.message))
    }
    return data;
}

export const apiLoginWithGoogle = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: "http://localhost:5173/auth/callback",
        }
    })
    if(error){
        throw new Error("Google login failed.")
    }
    return data
}

export const apiGetCurrentUser = async () => {
    try {
        const {data} = await supabase.auth.getSession()
        const user = data.session?.user;
        if(!user){
            useAuthStore.getState().logout()
            return null;
        }
        const {data: profile} = await supabase.from("Profile").select("*").eq("id", user.id).single()

        useAuthStore.getState().setUser(user)
        useAuthStore.getState().setProfile(profile)
        useAuthStore.getState().setInitialized(true)
        return {user, profile}
    }catch(error){
        useAuthStore.getState().logout()
        return null;
    }

}