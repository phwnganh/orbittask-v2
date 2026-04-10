import type {Sidebar} from "@/layouts/types/sidebar.type.ts";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";

type SidebarItemProps = {
    item: Sidebar;
}
const SidebarItem = ({item}: SidebarItemProps) => {
    const Icon = item.icon;
    const {collapsed} = useSidebarStore()
    return (
            <div className={`flex items-center ${collapsed ? "justify-center px-2" : "gap-3 px-3"} py-2 rounded-md text-text-secondary hover:bg-bg-tertiary hover:text-text-primary cursor-pointer transition-all duration-200`}>
                <Icon className={"w-5 h-5 shrink-0"} />
                    <span className={`text-sm font-medium whitespace-nowrap transition-all duration-200 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}`}>{item.label}</span>
            </div>

    );
};

export default SidebarItem;