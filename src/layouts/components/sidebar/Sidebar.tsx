import Logo from '@/assets/images/sidebar_logo.png'
const Sidebar = () => {
    return (
        <aside className={"flex flex-col gap-3"}>
            <div className={"flex justify-center items-center shrink-0"}>
                <img src={Logo} alt={"logo"} className="object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"/>
            </div>
        </aside>
    );
};

export default Sidebar;