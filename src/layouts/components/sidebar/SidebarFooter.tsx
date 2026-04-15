import Avatar from "@/shared/components/Avatar.tsx";
import { useSidebarStore } from "@/layouts/stores/sidebar.store.ts";
import ChevronIcon from "@/assets/icons/chevron-icon.svg?react";
import { useUIStore } from "@/shared/store/ui.store.ts";
import {useProfile} from "@/features/profile/hooks/useProfile.ts";

const SidebarFooter = () => {
  const { desktopCollapsed } = useSidebarStore();
  const { isUserMenuOpen, toggleUserMenu } = useUIStore();
  const {data: profile} = useProfile()
  return (
    <div
      className={`flex items-center ${desktopCollapsed ? "justify-center" : "justify-between"} hover:bg-bg-tertiary cursor-pointer transition-all duration-200 py-2 rounded-md px-2`}
    >
      <div
        className={`flex items-center h-10 ${desktopCollapsed ? "justify-center" : "gap-2"}`}
      >
        <Avatar avatarUrl={profile?.avatar_url}/>
        {!desktopCollapsed && (
          <span className={"text-sm font-medium truncate"}>{profile?.first_name} {profile?.last_name}</span>
        )}
      </div>

      {!desktopCollapsed && (
        <button
          type={"button"}
          aria-label={"open dropdown"}
          onClick={toggleUserMenu}
        >
          <ChevronIcon
            className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isUserMenuOpen ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      )}
    </div>
  );
};

export default SidebarFooter;
