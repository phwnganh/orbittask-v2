import MiniLogo from "@/assets/images/mini-logo.png";
import Logo from "@/assets/images/sidebar_logo.png";
import CloseIcon from "@/assets/icons/close-icon.svg?react";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";

const SidebarHeader = () => {
    const {desktopCollapsed, closeMobile} = useSidebarStore()
    return (
        <div className={"p-4 border-b border-border-primary"}>
            <div className={"flex items-center justify-between lg:hidden"}>
                <img
                    src={desktopCollapsed ? MiniLogo : Logo}
                    alt={"logo"}
                    className="h-8"
                />
                <button
                    onClick={closeMobile}
                    aria-label={"close sidebar"}
                    className={"flex justify-center items-center w-6 h-6 shrink-0"}
                >
                    <CloseIcon className={"text-text-primary"} />
                </button>
            </div>

            <div aria-label={"logo"} className={"hidden lg:flex justify-center items-center"}>
                {desktopCollapsed ? (
                    <img src={MiniLogo} alt={"mini-logo"} className={"h-8"} />
                ) : (
                    <img src={Logo} alt={"logo"} className="h-8" />
                )}
            </div>
        </div>
    );
};

export default SidebarHeader;