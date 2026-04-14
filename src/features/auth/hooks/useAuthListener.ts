import {useQueryClient} from "@tanstack/react-query";
import {useEffect} from "react";
import {supabase} from "@/shared/libs/supabase.ts";

export const useAuthListener = () => {
    const queryClient = useQueryClient()

    useEffect(() => {
        const {data} = supabase.auth.onAuthStateChange(() => {
            queryClient.invalidateQueries({queryKey: ["session"]})
        })
        return () => {
            data.subscription.unsubscribe()
        }
    }, []);
}