import Button from "@/components/uis/Button.tsx";
import EmailIcon from '@/assets/email-icon.svg'
import {Link, useLocation} from "react-router-dom";
import {LOGIN} from "@/constants/route.constant.ts";
const VerifiedAccountPage = () => {
    const location = useLocation();
    const email = location.state?.email || "";
    const getEmagetEtEmailProviderUrl = (email: string) => {
        const domain = email.split("@")[1]
        switch (domain){
            case "gmail.com":
                return "https://mail.google.com";
            case "hotmail.com":
                return "https://outlook.live.com";
            case "yahoo.com":
                return "https://mail.yahoo.com";
            default:
                return null;
        }
    }

    const handleOpenEmail = () => {
        const url = getEmagetEtEmailProviderUrl(email)
        if(url){
            window.open(url, "_blank");
        }
    }
    return (
        <div className={"flex flex-col items-center text-center gap-6"}>
            <div className={"w-12 h-12 flex items-center justify-center shrink-0"}>
                <img src={EmailIcon} alt="email-icon" className={"text-text-primary text-center"}/>
            </div>
            <header className={"flex flex-col gap-2 text-center"}>
                <h1 className={"text-text-primary font-semibold text-2xl"}>Check Your Email</h1>
                <h2 className={"text-text-secondary font-medium text-sm"}>We've sent a verification link to <span className={"text-primary"}>{email}</span></h2>
            </header>
            <div className={"flex flex-col gap-3 w-full"}>
                <Button type={"button"} onClick={handleOpenEmail}>Open Email</Button>
                <Button type={"button"} variant={"secondary"}>Resend Email</Button>
            </div>

            <Link to={LOGIN} className={"text-sm text-text-muted hover:text-primary transition"}>← Back to Login</Link>
        </div>
    );
};

export default VerifiedAccountPage;