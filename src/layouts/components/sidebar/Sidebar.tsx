import Logo from '@/assets/images/sidebar_logo.png'
import MiniLogo from '@/assets/images/mini-logo.png'
import PanelLeftIcon from '@/assets/icons/panel-left-icon.svg?react'
import {SIDEBAR} from "@/layouts/constants/sidebar.constant.ts";
import SidebarItem from "@/layouts/components/sidebar/SidebarItem.tsx";
import SidebarProjectList from "@/layouts/components/sidebar/SidebarProjectList.tsx";
import SidebarFooter from "@/layouts/components/sidebar/SidebarFooter.tsx";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";
const Sidebar = () => {
    const {collapsed, toggle} = useSidebarStore()
    return (
        <aside className={`flex flex-col gap-3 h-full bg-bg-secondary border-r border-border-primary transition-all duration-300 ${collapsed ? "w-20 min-w-20" : "w-65 min-w-65"}`}>
                <div className={"group p-4 flex justify-center items-center border-b border-border-primary relative"}>
                    {collapsed && (
                        <button type={"button"} onClick={toggle} className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-1 rounded hover:bg-bg-tertiary opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"}>
                            <PanelLeftIcon className={"w-5 h-5"}/>
                        </button>
                    )}
                    {collapsed ? <img src={MiniLogo} alt={"mini-logo"} className={"h-8 object-contain transition-opacity duration-200 group-hover:opacity-0 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"}/> :
                        <img src={Logo} alt={"logo"} className="h-8 object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"/>
                    }
                </div>

            <div className={"flex-1 overflow-y-auto p-3 space-y-1"}>
                {SIDEBAR.map((item) =>
                    {
                        if(item.key === "projects"){
                            return (
                                <div key={item.key} className={"space-y-1"}>
                                    <SidebarItem item={item}/>
                                    {!collapsed && <SidebarProjectList/>}
                                </div>
                            )
                        }
                        return <SidebarItem key={item.key} item={item}/>
                    }
                )}
            </div>
            <div className={"p-3 border-t border-border-primary"}>
                <SidebarFooter/>
            </div>
        </aside>
    );
};

export default Sidebar;