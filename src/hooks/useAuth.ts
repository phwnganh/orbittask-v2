import {useMutation} from "@tanstack/react-query";
import {apiLogin, apiRegister, apiUpdateUserStatus} from "@/services/auth.service.ts";

export const useRegister = () => {
    return useMutation({
        mutationFn: apiRegister
    })
}

export const useUpdateUserStatus = () => {
    return useMutation({
        mutationFn: apiUpdateUserStatus
    })
}

export const useLogin = () => {
    return useMutation({
        mutationFn: apiLogin
    })
}