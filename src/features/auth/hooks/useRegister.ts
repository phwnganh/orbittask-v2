import {useMutation} from "@tanstack/react-query";
import {mapRegisterError} from "@/features/auth/utils/auth.error.ts";
import {registerApi} from "@/features/auth/services/auth.api.ts";

export const useRegister = () => {
    return useMutation({
        mutationFn: registerApi,
        onError: (error: any) => {
            throw new Error(mapRegisterError(error.message))
        }
    })
}