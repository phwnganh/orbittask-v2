import {initAuth, listenAuthChange} from "@/features/auth/libs/auth.listener.ts";

export const authInitialization = async () => {
    await initAuth()
    listenAuthChange()
}