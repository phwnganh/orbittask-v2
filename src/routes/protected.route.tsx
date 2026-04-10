import {Navigate} from "react-router-dom";
import {FORBIDDEN, LOGIN} from "@/shared/constants/route.constant.ts";
import type {ReactNode} from "react";
import Skeleton from "@/shared/components/Skeleton.tsx";
import {useSession} from "@/features/auth/hooks/useSession.ts";
import {useProfile} from "@/features/profile/hooks/useProfile.ts";

type ProtectedRouteProps = {
    allowRoles?: ("Admin" | "User")[]
    children: ReactNode
}
const ProtectedRoute = ({allowRoles, children}: ProtectedRouteProps) => {

    const {data: session, isLoading: isSessionLoading} = useSession()
    const {data: profile, isLoading: isProfileLoading} = useProfile()
    if (isSessionLoading || isProfileLoading) {
        return <Skeleton/>;
    }
    if(!session?.user){
        return <Navigate to={LOGIN} replace/>
    }

    if(allowRoles){
        if(!profile){
            return <Skeleton/>
        }
        if(allowRoles.includes(profile.role)){
            return <Navigate to={FORBIDDEN} replace/>
        }
    }

    return children
};

export default ProtectedRoute;