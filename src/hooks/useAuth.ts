import {useMutation} from "@tanstack/react-query";
import {apiLogin, apiLoginWithGoogle, apiRegister} from "@/services/auth.service.ts";

export const useRegister = () => {
    return useMutation({
        mutationFn: apiRegister
    })
}

export const useLogin = () => {
    return useMutation({
        mutationFn: apiLogin
    })
}

export const useLoginWithGoogle = () => {
    return useMutation({
        mutationFn: apiLoginWithGoogle
    })
}