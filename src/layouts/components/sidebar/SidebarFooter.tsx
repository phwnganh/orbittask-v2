import Avatar from "@/shared/components/Avatar.tsx";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";
import ChevronIcon from '@/assets/icons/chevron-down-icon.svg?react';
import {useUIStore} from "@/shared/store/ui.store.ts";

const SidebarFooter = () => {
    const {collapsed} = useSidebarStore()
    const {isUserMenuOpen, toggleUserMenu} = useUIStore()
    return (
        <div className={"flex items-center justify-between"}>
        <div className={`flex items-center h-10 ${collapsed ? "justify-center" : "gap-2 px-2"}`}>
            <Avatar/>
            {!collapsed &&
                <span className={"text-sm font-medium truncate"}>Your Name</span>
            }
        </div>
            <button type={"button"} onClick={toggleUserMenu} className={"flex justify-center items-center w-5 h-5 cursor-pointer"}>
                <ChevronIcon className={`${isUserMenuOpen ? "rotate-180" : "rotate-0"}`}/>
            </button>
        </div>
    );
};

export default SidebarFooter;