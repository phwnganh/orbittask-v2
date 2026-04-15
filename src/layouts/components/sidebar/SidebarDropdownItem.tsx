import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";

const SidebarDropdownItem = () => {
    return (
        <>
            <DropdownItem>Profile</DropdownItem>
            <div className={"my-1 h-px bg-bg-tertiary/50"}/>
            <DropdownItem danger>Logout</DropdownItem>
        </>
    );
};

export default SidebarDropdownItem;