import type {SidebarItem} from "@/layouts/types/sidebar.type.ts";

type SidebarItemProps = {
    item: SidebarItem;
}
const SidebarItem = ({item}: SidebarItemProps) => {
    const Icon = item.icon;
    return (
        <div className={"flex items-center gap-2"}>
            <Icon className={"w-5 h-5"} />
            <span>{item.label}</span>
        </div>
    );
};

export default SidebarItem;