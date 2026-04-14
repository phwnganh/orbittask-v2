import type {Sidebar} from "@/layouts/types/sidebar.type.ts";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";
import {NavLink} from "react-router-dom";

type SidebarItemProps = {
    item: Sidebar;
}
const SidebarItem = ({item}: SidebarItemProps) => {
    const Icon = item.icon;
    const {desktopCollapsed} = useSidebarStore()
    return (
            <NavLink to={item.path} className={({isActive}) => `flex items-center ${desktopCollapsed ? "justify-center px-2" : "gap-3 px-3"} py-2 rounded-md hover:bg-bg-tertiary hover:text-text-primary cursor-pointer transition-all duration-200 ${isActive ? "text-text-primary bg-bg-tertiary" : "text-text-secondary"}`}>
                <Icon className={"w-5 h-5 shrink-0"} />
                    <span className={`text-sm font-medium whitespace-nowrap transition-all duration-200 ${desktopCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}`}>{item.label}</span>
            </NavLink>
    );
};

export default SidebarItem;