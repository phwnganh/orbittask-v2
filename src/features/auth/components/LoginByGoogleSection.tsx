import Button from "@/shared/components/Button.tsx";
import GoogleIcon from '@/assets/icons/google-icon.svg'
import {useLoginWithGoogle} from "@/features/auth/hooks/useLogin.ts";
const LoginByGoogleSection = () => {
    const {mutate} = useLoginWithGoogle()

    const handleLoginByGoogle = async () => {
        mutate()
    }
    return (
        <Button onClick={handleLoginByGoogle} type={"button"} variant={"secondary"} className={"flex items-center gap-2 justify-center"}>
            <div className={"flex justify-center items-center w-4 h-4 shrink-0"}>
                <img src={GoogleIcon} alt={"google-icon"}/>
            </div>
            <span className={"text-text-primary font-medium"}>Continue with Google</span>
        </Button>
    );
};

export default LoginByGoogleSection;