import {Navigate} from "react-router-dom";
import {FORBIDDEN, LOGIN} from "@/shared/constants/route.constant.ts";
import type {ReactNode} from "react";
import {useAuthStore} from "@/features/auth/stores/auth.store.ts";
import {useProfileStore} from "@/features/profile/stores/profile.store.ts";

type ProtectedRouteProps = {
    allowRoles?: ("Admin" | "User")[]
    children: ReactNode
}
const ProtectedRoute = ({allowRoles, children}: ProtectedRouteProps) => {
    const {user, isInitialized} = useAuthStore()
    const {profile} = useProfileStore()
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