import {useMutation} from "@tanstack/react-query";
import {loginApi, loginWithGoogleApi} from "@/features/auth/services/auth.api.ts";

export const useLogin = () => {
    return useMutation({
        mutationFn: loginApi,
        onError: (error) => {
            throw new Error(error.message)
        }
    })
}

export const useLoginWithGoogle = () => {
    return useMutation({
        mutationFn: loginWithGoogleApi
    })
}