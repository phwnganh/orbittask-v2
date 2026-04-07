import {Navigate} from "react-router-dom";
import type {ReactNode} from "react";
import {useAuthStore} from "@/features/auth/stores/auth.store.ts";

const PublicRoute = ({children}: {children: ReactNode}) => {
    const {user, isInitialized} = useAuthStore()

    if (!isInitialized) {
        return null;
    }
    if(user){
        return <Navigate to={"/"} replace/>
    }
    return children
};

export default PublicRoute;