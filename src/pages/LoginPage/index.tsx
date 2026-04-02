import LoginTitleSection from "@/components/LoginComponent/LoginTitleSection.tsx";
import LoginFormSection from "@/components/LoginComponent/LoginFormSection.tsx";
import LoginByGoogleSection from "@/components/LoginComponent/LoginByGoogleSection.tsx";

const LoginPage = () => {
    return (
        <div className={"flex justify-center items-center min-h-screen bg-bg-primary"}>
            <div className={"max-w-md w-full flex flex-col gap-6 border border-border-primary p-6 rounded-xl shadow-lg"}>
                <LoginTitleSection/>
                <LoginFormSection/>
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-border-primary"/>
                    <span className="text-sm text-text-muted">OR</span>
                    <div className="flex-1 h-px bg-border-primary"/>
                </div>
                <LoginByGoogleSection/>
            </div>
        </div>
    );
};

export default LoginPage;