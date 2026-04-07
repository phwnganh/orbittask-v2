import {type ReactNode, useEffect} from "react";
import {initAuth, listenAuthChange} from "@/features/auth/libs/auth.listener.ts";

let isInitialized = false;
const AuthInitialization = ({children}: {children: ReactNode}) => {
    useEffect(() => {
        if(isInitialized) return;
        isInitialized = true;

        initAuth()
        listenAuthChange()
    }, [])
    return children;
};

export default AuthInitialization;