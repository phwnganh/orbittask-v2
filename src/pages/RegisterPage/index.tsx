import RegisterTitleSection from "@/features/auth/components/RegisterTitleSection.tsx";
import RegisterFormSection from "@/features/auth/components/RegisterFormSection.tsx";
import LoginByGoogleSection from "@/features/auth/components/LoginByGoogleSection.tsx";
import {Link} from "react-router-dom";
import {LOGIN} from "@/shared/constants/route.constant.ts";

const RegisterPage = () => {
    return (
        <>
            <RegisterTitleSection/>
            <RegisterFormSection/>
            <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border-primary"/>
                <span className="text-sm text-text-muted">OR</span>
                <div className="flex-1 h-px bg-border-primary"/>
            </div>
            <LoginByGoogleSection/>
            <div className={"flex items-center gap-1 text-sm justify-center"}>
                <p>Already have an account?</p>
                <Link to={LOGIN} className={"text-primary hover:text-primary-hover transition"}>Login</Link>
            </div>
        </>
    );
};

export default RegisterPage;