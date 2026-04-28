import Button from "../../shared/components/button/Button.tsx";
import {useNavigate} from "react-router-dom";
import SuccessIcon from '@/assets/icons/verified-icon.svg'
const SuccessfulVerifiedAccountPage = () => {
    const navigate = useNavigate();
    return (
        <div className={"flex flex-col items-center text-center gap-6"}>
            <div className={"flex justify-center items-center w-12 h-12 shrink-0"}>
                <img src={SuccessIcon} alt="success-icon" />
            </div>
            <header className={"flex flex-col gap-3 text-center"}>
                <div className={"flex items-center gap-1"}>

                    <h1 className={"text-text-primary font-semibold text-xl sm:text-2xl"}>Email verified successfully!</h1>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <h2 className={"text-text-secondary font-medium text-xs sm:text-sm"}>Your account has been activated.</h2>
                    <span className={"text-text-secondary font-medium text-xs sm:text-sm"}>You're all set. Redirecting you to your dashboard.</span>
                </div>
            </header>
            <div className={"w-full"}>
                <Button variant={"secondary"} fullWidth={true} onClick={() => navigate("/")}>Go to Dashboard</Button>
            </div>
        </div>
    );
};

export default SuccessfulVerifiedAccountPage;