import {Navigate, useLocation} from "react-router-dom";
import type {ReactNode} from "react";
import Skeleton from "@/shared/components/Skeleton.tsx";
import {useSession} from "@/features/auth/hooks/useSession.ts";
import {useProfile} from "@/features/profile/hooks/useProfile.ts";
import {SUCCESSFUL_VERIFIED_ACCOUNT} from "@/shared/constants/route.constant.ts";

const PublicRoute = ({children}: {children: ReactNode}) => {
    const {data: session, isLoading: isSessionLoading} = useSession()
    const { isLoading: isProfileLoading} = useProfile()
    const location = useLocation()
    const isSuccessPage = location.pathname === SUCCESSFUL_VERIFIED_ACCOUNT
    if (isSessionLoading || isProfileLoading) {
        return <Skeleton/>;
    }
    if(session?.user && !isSuccessPage){
        return <Navigate to={"/"} replace/>
    }
    return children
};

export default PublicRoute;