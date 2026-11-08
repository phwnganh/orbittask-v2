import {useEffect} from "react";
import {supabase} from "@/shared/libs/supabase.ts";
import { useReactQueryClient } from "@/shared/libs/react-query/query-client";

export const useAuthListener = () => {
    const {queryClient} = useReactQueryClient()

    useEffect(() => {
        const {data} = supabase.auth.onAuthStateChange(() => {
            queryClient.invalidateQueries({queryKey: ["session"]})
        })
        return () => {
            data.subscription.unsubscribe()
        }
    }, []);
}