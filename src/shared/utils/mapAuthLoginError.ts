import {AUTH_LOGIN_ERROR_MAP} from "@/shared/constants/auth-error.constant.ts";

export const mapAuthLoginError = (error?: string) => {
    if(!error) return "Something went wrong";
    return AUTH_LOGIN_ERROR_MAP[error] || "Login failed. Please try again later"
}