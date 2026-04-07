import {supabase} from "@/shared/libs/supabase.ts";
import {useAuthStore} from "@/features/auth/stores/auth.store.ts";

export const initAuth = async () => {
    const {setUser, setInitialized} = useAuthStore.getState()
    setInitialized(false)
    const {data} = await supabase.auth.getSession()
    setUser(data.session?.user ?? null)
    setInitialized(true)
}

let subscription: any = null;
export const listenAuthChange = () => {
    if(subscription) return;
    const {setUser} = useAuthStore.getState()
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null)
    })

    subscription = data.subscription
}