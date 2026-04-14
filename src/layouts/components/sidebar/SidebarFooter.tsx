import Avatar from "@/shared/components/Avatar.tsx";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";
import ChevronIcon from '@/assets/icons/chevron-icon.svg?react';
import {useUIStore} from "@/shared/store/ui.store.ts";

const SidebarFooter = () => {
    const {collapsed} = useSidebarStore()
    const {isUserMenuOpen, toggleUserMenu} = useUIStore()
    return (
        <div className={"flex items-center justify-between hover:bg-bg-tertiary cursor-pointer transition-all duration-200 py-2 rounded-md px-2"}>
        <div className={`flex items-center h-10 ${collapsed ? "justify-center" : "gap-2"}`}>
            <Avatar/>
            {!collapsed &&
                <span className={"text-sm font-medium truncate"}>Your Name</span>
            }
        </div>

            {!collapsed && (
                <button type={"button"} aria-label={"open dropdown"} onClick={toggleUserMenu}>
                    <ChevronIcon className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isUserMenuOpen ? "rotate-180" : "rotate-0"}`}/>
                </button>
            )}

        </div>
    );
};

export default SidebarFooter;