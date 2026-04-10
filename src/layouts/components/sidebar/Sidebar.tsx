import Logo from '@/assets/images/sidebar_logo.png'
import {SIDEBAR} from "@/layouts/constants/sidebar.constant.ts";
import SidebarItem from "@/layouts/components/sidebar/SidebarItem.tsx";
const Sidebar = () => {
    return (
        <aside className={"flex flex-col gap-3"}>
            <div className={"flex justify-center items-center shrink-0"}>
                <img src={Logo} alt={"logo"} className="object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"/>
            </div>
            {SIDEBAR.map((item, index) =>
                <SidebarItem key={index} item={item}/>
            )}
        </aside>
    );
};

export default Sidebar;