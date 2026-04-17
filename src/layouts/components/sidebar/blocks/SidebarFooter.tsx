import Avatar from "@/shared/components/avatar/Avatar.tsx";
import { useSidebarStore } from "@/layouts/stores/sidebar.store.ts";
import ChevronIcon from "@/assets/icons/chevron-icon.svg?react";
import {useProfile} from "@/features/profile/hooks/useProfile.ts";
import {forwardRef, type HTMLAttributes} from "react";

type SidebarFooterProps = {
  open?: boolean;
} & HTMLAttributes<HTMLDivElement>;
const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(({open, className, ...props}, ref) => {
  const { desktopCollapsed } = useSidebarStore();
  const {data: profile} = useProfile()
  return (
      <div ref={ref}
           {...props}
          className={`flex items-center ${desktopCollapsed ? "justify-center" : "justify-between"} hover:bg-bg-tertiary cursor-pointer transition-all duration-200 py-2 rounded-md px-2 ${className}`}
      >
        <div
            className={`flex items-center h-10 ${desktopCollapsed ? "justify-center" : "gap-2"}`}
        >
          <Avatar size={"sm"} avatarUrl={profile?.avatar_url}/>
          {!desktopCollapsed && (
              <span className={"text-sm font-medium truncate"}>{profile?.first_name} {profile?.last_name}</span>
          )}
        </div>

        {!desktopCollapsed && (
            <div
            >
              <ChevronIcon
                  className={`w-5 h-5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
              />
            </div>
        )}
      </div>
  );
})

SidebarFooter.displayName = "SidebarFooter";

export default SidebarFooter;
