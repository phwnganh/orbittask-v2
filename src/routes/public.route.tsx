import {Navigate} from "react-router-dom";
import type {ReactNode} from "react";
import Skeleton from "@/shared/components/Skeleton.tsx";
import {useSession} from "@/features/auth/hooks/useSession.ts";
import {useProfile} from "@/features/profile/hooks/useProfile.ts";

const PublicRoute = ({children}: {children: ReactNode}) => {
    const {data: session, isLoading: isSessionLoading} = useSession()
    const { isLoading: isProfileLoading} = useProfile()

    if (isSessionLoading || isProfileLoading) {
        return <Skeleton/>;
    }
    if(session?.user){
        return <Navigate to={"/"} replace/>
    }
    return children
};

export default PublicRoute;