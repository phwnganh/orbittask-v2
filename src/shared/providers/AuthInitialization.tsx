import {type ReactNode, useEffect} from "react";
import {initAuth, listenAuthChange} from "@/features/auth/libs/auth.listener.ts";

const AuthInitialization = ({children}: {children: ReactNode}) => {
    useEffect(() => {
        initAuth()
        listenAuthChange()
    }, [])
    return children;
};

export default AuthInitialization;