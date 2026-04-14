import HeaderTitle from "@/layouts/components/header/HeaderTitle.tsx";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";
import PanelLeftIcon from '@/assets/icons/panel-left-icon.svg?react'
import HeaderAction from "@/layouts/components/header/HeaderAction.tsx";
const Header = () => {
    const {toggleDesktop, openMobile} = useSidebarStore()

    return (
        <header className={"sticky top-0 z-30 flex items-center justify-between w-full h-16 px-4 border-b border-border-primary bg-bg-primary"}>
            <div className={"flex items-center gap-3"}>
                <button
                    onClick={openMobile}
                    aria-label={"Open sidebar"}
                    className="p-2 rounded-md hover:bg-bg-tertiary lg:hidden"
                >
                    <PanelLeftIcon className="w-5 h-5"/>
                </button>

                <button
                    onClick={toggleDesktop}
                    className="p-2 rounded-md hover:bg-bg-tertiary hidden lg:block"
                >
                    <PanelLeftIcon className="w-5 h-5"/>
                </button>
                <HeaderTitle/>
            </div>
            <HeaderAction/>
        </header>
    );
};

export default Header;