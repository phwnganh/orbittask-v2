import {supabase} from "@/shared/libs/supabase.ts";
import {useAuthStore} from "@/features/auth/stores/auth.store.ts";
import {useProfileStore} from "@/features/profile/stores/profile.store.ts";
import {getProfileByUserIdApi} from "@/features/profile/services/profile.api.ts";

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
    const {setUser, logout} = useAuthStore.getState()
    const {setProfile, clearProfile} = useProfileStore.getState()
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
        const user = session?.user ?? null
        setUser(user)
        if(event === "SIGNED_IN" && user){
            const {data} = await getProfileByUserIdApi(user.id)
            setProfile(data)
            window.history.replaceState({}, document.title, window.location.pathname)
        }
        if(event === "SIGNED_OUT"){
            clearProfile()
            logout()
        }
    })

    subscription = data.subscription
}