import Button from "@/components/uis/Button.tsx";
import {useNavigate} from "react-router-dom";
import {LOGIN} from "@/constants/route.constant.ts";
import SuccessIcon from '@/assets/success-icon.svg'
import {useEffect} from "react";
import {useUpdateUserStatus} from "@/hooks/useAuth.ts";
const SuccessfulVerifiedAccountPage = () => {
    const navigate = useNavigate();
    const {mutate} = useUpdateUserStatus()
    useEffect(() => {
        mutate()
    }, [])
    return (
        <div className={"flex flex-col items-center text-center gap-6"}>
            <div className={"flex justify-center items-center w-12 h-12 shrink-0"}>
                <img src={SuccessIcon} alt="success-icon" />
            </div>
            <header className={"flex flex-col gap-3 text-center"}>
                <div className={"flex items-center gap-1"}>

                    <h1 className={"text-text-primary font-semibold text-2xl"}>Email verified successfully!</h1>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <h2 className={"text-text-secondary font-medium text-sm"}>Your account has been activated.</h2>
                    <span className={"text-text-secondary font-medium text-sm"}>You can now log in and start using the app.</span>
                </div>
            </header>
            <div className={"w-full"}>
                <Button variant={"secondary"} className={"w-full"} onClick={() => navigate(LOGIN)}>Go to Login</Button>
            </div>
        </div>
    );
};

export default SuccessfulVerifiedAccountPage;