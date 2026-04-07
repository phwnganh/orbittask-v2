import LoginTitleSection from "@/features/auth/components/LoginTitleSection.tsx";
import LoginFormSection from "@/features/auth/components/LoginFormSection.tsx";
import LoginByGoogleSection from "@/features/auth/components/LoginByGoogleSection.tsx";
import {Link} from "react-router-dom";
import {REGISTER} from "@/shared/constants/route.constant.ts";

const LoginPage = () => {
    return (
        <>
                <LoginTitleSection/>
                <LoginFormSection/>
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-border-primary"/>
                    <span className="text-sm text-text-muted">OR</span>
                    <div className="flex-1 h-px bg-border-primary"/>
                </div>
                <LoginByGoogleSection/>
                <div className={"flex items-center gap-1 text-sm justify-center"}>
                    <p>Don't have an account?</p>
                    <Link to={REGISTER} className={"text-primary hover:text-primary-hover transition"}>Sign Up</Link>
                </div>
            </>
    );
};

export default LoginPage;