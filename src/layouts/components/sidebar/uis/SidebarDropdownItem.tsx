import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";

const SidebarDropdownItem = () => {
    return (
        <>
            <DropdownItem>Settings</DropdownItem>
            <div className={"my-1 h-px bg-text-primary/30"}/>
            <DropdownItem danger>Logout</DropdownItem>
        </>
    );
};

export default SidebarDropdownItem;