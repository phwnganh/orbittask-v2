import {useSession} from "@/features/auth/hooks/useSession.ts";
import {useQuery} from "@tanstack/react-query";
import {getProfileByUserIdApi} from "@/features/profile/services/profile.api.ts";
import type {Profile} from "@/features/auth/types/auth.type.ts";

export const useProfile = () => {
    const {data: session} = useSession()
    const user = session?.user

    return useQuery<Profile | null>({
        queryKey: ["profile", user?.id],
        queryFn: () => getProfileByUserIdApi(user!.id),
        enabled: !!user
    })
}