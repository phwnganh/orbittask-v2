import Logo from '@/assets/sidebar_logo.png'

const RegisterTitleSection = () => {
    return (
        <header className={"flex flex-col gap-2 text-center"}>
            <div className={"flex justify-center items-center shrink-0"}>
                <img src={Logo} alt={"logo"} className={"object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"}/>
            </div>
            <h1 className={"text-text-primary font-semibold text-2xl"}>Create An Account</h1>
        </header>
    );
};

export default RegisterTitleSection;