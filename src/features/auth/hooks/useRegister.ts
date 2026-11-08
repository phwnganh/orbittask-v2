import {useMutation} from "@tanstack/react-query";
import {registerApi} from "@/features/auth/services/auth.api.ts";

export const useRegister = () => {
    return useMutation({
        mutationFn: registerApi,
        onError: (error) => {
            throw new Error(error.message)
        }
    })
}