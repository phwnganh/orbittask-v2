import Logo from '@/assets/images/sidebar_logo.png'
import MiniLogo from '@/assets/images/mini-logo.png'
import CloseIcon from '@/assets/icons/close-icon.svg?react'
import {SIDEBAR} from "@/layouts/constants/sidebar.constant.ts";
import SidebarItem from "@/layouts/components/sidebar/SidebarItem.tsx";
import SidebarProjectList from "@/layouts/components/sidebar/SidebarProjectList.tsx";
import SidebarFooter from "@/layouts/components/sidebar/SidebarFooter.tsx";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";
const Sidebar = () => {
    const {desktopCollapsed, isMobileOpen, closeMobile} = useSidebarStore()
    return (
        <>
            {isMobileOpen && (
                <div
                    onClick={closeMobile}
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
            )}
            <aside className={`
                    fixed top-0 left-0 z-50 h-full
                    bg-bg-secondary border-r border-border-primary
                    transition-all duration-300
                    ${desktopCollapsed ? "lg:w-20" : "lg:w-65"}
                    w-65
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}>
                <div className={"p-4 border-b border-border-primary"}>
                    <div className={"flex items-center justify-between lg:hidden"}>
                        <img src={desktopCollapsed ? MiniLogo : Logo} alt={"logo"} className="h-8"/>
                        <button onClick={closeMobile} className={"flex justify-center items-center w-6 h-6 shrink-0"}>
                            <CloseIcon className={"text-text-primary"}/>
                        </button>
                    </div>

                    <div className={"hidden lg:flex justify-center items-center"}>
                        {desktopCollapsed ? <img src={MiniLogo} alt={"mini-logo"} className={"h-8"}/> :
                            <img src={Logo} alt={"logo"} className="h-8"/>
                        }
                    </div>
                </div>

                <div className={"flex-1 overflow-y-auto p-3 space-y-1"}>
                    {SIDEBAR.map((item) =>
                        {
                            if(item.key === "projects"){
                                return (
                                    <div key={item.key} className={"space-y-1"}>
                                        <SidebarItem item={item}/>
                                        {!desktopCollapsed && <SidebarProjectList/>}
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
        </>

    );
};

export default Sidebar;