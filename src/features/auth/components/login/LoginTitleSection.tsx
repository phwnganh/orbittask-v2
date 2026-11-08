import Logo from '@/assets/images/sidebar_logo.png'
const LoginTitleSection = () => {
    return (
        <header className={"flex flex-col gap-2 text-center"}>
            <div className={"flex justify-center items-center shrink-0"}>
                <img src={Logo} alt={"logo"} className="object-contain"/>
            </div>
            <div className={"flex flex-col gap-1"}>
                <h1 className={"text-text-primary font-semibold text-xl sm:text-2xl"}>Login To Your Account</h1>
                <h2 className={"text-text-secondary font-medium text-sm"}>Welcome back! Please enter your credentials!</h2>
            </div>
        </header>
    );
};

export default LoginTitleSection;