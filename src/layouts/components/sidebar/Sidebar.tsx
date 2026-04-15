import { SIDEBAR } from "@/layouts/constants/sidebar.constant.ts";
import SidebarItem from "@/layouts/components/sidebar/SidebarItem.tsx";
import SidebarProjectList from "@/layouts/components/sidebar/SidebarProjectList.tsx";
import SidebarFooter from "@/layouts/components/sidebar/SidebarFooter.tsx";
import { useSidebarStore } from "@/layouts/stores/sidebar.store.ts";
import SidebarHeader from "@/layouts/components/sidebar/SidebarHeader.tsx";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import SidebarDropdownItem from "@/layouts/components/sidebar/SidebarDropdownItem.tsx";
const Sidebar = () => {
  const { desktopCollapsed, isMobileOpen, closeMobile } = useSidebarStore();
  return (
    <>
      {isMobileOpen && (
        <div
          onClick={closeMobile}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
        />
      )}
      <aside
        className={`
                    fixed lg:static flex flex-col top-0 left-0 z-50 h-full
                    bg-bg-secondary border-r border-border-primary
                    transition-all duration-300
                    ${desktopCollapsed ? "lg:w-20" : "lg:w-65"}
                    w-65
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
      >
        <SidebarHeader/>

        <div className={"flex-1 overflow-y-auto p-3 space-y-1"}>
          {SIDEBAR.map((item) => {
            if (item.key === "projects") {
              return (
                <div key={item.key} className={"space-y-1"}>
                  <SidebarItem item={item} />
                  {!desktopCollapsed && <SidebarProjectList />}
                </div>
              );
            }
            return <SidebarItem key={item.key} item={item} />;
          })}
        </div>
        <div className={"p-3 border-t border-border-primary"}>
            <Dropdown trigger={({open, ref, ...props}) => <SidebarFooter ref={ref} open={open} {...props}/>}>
                <SidebarDropdownItem/>
            </Dropdown>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
