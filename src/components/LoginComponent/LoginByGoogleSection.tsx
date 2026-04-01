import Button from "@/components/uis/Button.tsx";
import GoogleIcon from '@/assets/google-icon.svg'
const LoginByGoogleSection = () => {
    return (
        <Button type={"button"} variant={"secondary"} className={"flex items-center gap-2 justify-center"}>
            <div className={"flex justify-center items-center w-4 h-4 shrink-0"}>
                <img src={GoogleIcon} alt={"google-icon"}/>
            </div>
            <span className={"text-text-primary font-medium"}>Login By Google</span>
        </Button>
    );
};

export default LoginByGoogleSection;