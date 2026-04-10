import HeaderTitle from "@/layouts/components/header/HeaderTitle.tsx";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";
import PanelLeftIcon from '@/assets/icons/panel-left-icon.svg?react'
const Header = () => {
    const {toggle, collapsed} = useSidebarStore()
    return (
        <header className={"flex items-center justify-between h-full px-4 border-b border-border-primary"}>
            <div className={"flex items-center gap-3"}>
                {!collapsed &&
                    <button onClick={toggle} className={"p-2 rounded-md hover:bg-bg-tertiary transition"}>
                        <PanelLeftIcon className={"w-5 h-5"}/>
                    </button>
                }
                <HeaderTitle/>
            </div>

        </header>
    );
};

export default Header;