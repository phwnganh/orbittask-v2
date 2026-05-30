import Logo from '@/assets/images/sidebar_logo.png'

const RegisterTitleSection = () => {
    return (
        <header className={"flex flex-col gap-2 text-center"}>
            <div className={"flex justify-center items-center shrink-0"}>
                <img src={Logo} alt={"logo"} className={"object-contain"}/>
            </div>
            <h1 className={"text-text-primary font-semibold text-xl sm:text-2xl"}>Create An Account</h1>
        </header>
    );
};

export default RegisterTitleSection;