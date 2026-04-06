import {useAuthStore} from "@/stores/auth.store.ts";
import {Navigate} from "react-router-dom";
import {FORBIDDEN, LOGIN} from "@/constants/route.constant.ts";
import type {ReactNode} from "react";

type ProtectedRouteProps = {
    allowRoles?: ("Admin" | "User")[]
    children: ReactNode
}
const ProtectedRoute = ({allowRoles, children}: ProtectedRouteProps) => {
    const {user, isInitialized, profile} = useAuthStore()

    if (!isInitialized) {
        return null;
    }
    if(!user){
        return <Navigate to={LOGIN} replace/>
    }

    if(allowRoles){
        if(!profile){
            return <Navigate to={LOGIN} replace/>
        }
        if(!allowRoles.includes(profile.role)){
            return <Navigate to={FORBIDDEN} replace/>
        }
    }
    return children
};

export default ProtectedRoute;