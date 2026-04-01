import LoginTitleSection from "@/components/LoginComponent/LoginTitleSection.tsx";
import LoginFormSection from "@/components/LoginComponent/LoginFormSection.tsx";
import LoginByGoogleSection from "@/components/LoginComponent/LoginByGoogleSection.tsx";

const LoginPage = () => {
    return (
        <div className={"flex justify-center items-center min-h-screen bg-bg-primary"}>
            <div className={"max-w-1/3 w-full flex flex-col gap-4"}>
                <LoginTitleSection/>
                <LoginFormSection/>
                <p className={"text-xl font-bold text-text-secondary text-center"}>OR</p>
                <LoginByGoogleSection/>
            </div>
        </div>
    );
};

export default LoginPage;