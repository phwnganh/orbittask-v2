import {useAuthStore} from "@/stores/auth.store.ts";
import {Navigate} from "react-router-dom";
import type {ReactNode} from "react";
import Skeleton from "@/components/uis/Skeleton.tsx";

const PublicRoute = ({children}: {children: ReactNode}) => {
    const {user, isInitialized} = useAuthStore()

    if (!isInitialized) {
        return <Skeleton/>;
    }
    if(user){
        return <Navigate to={"/"} replace/>
    }
    return children
};

export default PublicRoute;