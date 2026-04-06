import {useAuthStore} from "@/stores/auth.store.ts";
import {Navigate} from "react-router-dom";
import type {ReactNode} from "react";

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