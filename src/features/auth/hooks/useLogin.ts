import {useMutation} from "@tanstack/react-query";
import {mapLoginError} from "@/features/auth/utils/auth.error.ts";
import {loginApi, loginWithGoogleApi} from "@/features/auth/services/auth.api.ts";

export const useLogin = () => {
    return useMutation({
        mutationFn: loginApi,
        onError: (error: any) => {
            throw new Error(mapLoginError(error.message))
        }
    })
}

export const useLoginWithGoogle = () => {
    return useMutation({
        mutationFn: loginWithGoogleApi
    })
}