import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import SortButton from "@/features/project/components/filters/SortButton.tsx";
import DropdownContent from "@/shared/components/dropdown/DropdownContent.tsx";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import InboxSortDropdownItem from "@/features/inbox/components/sorts/InboxSortDropdownItem.tsx";

const InboxHeaderSection = () => {
    return (
        <div className={"flex items-start justify-between"}>
            <h1 className={"font-bold text-2xl text-text-primary"}>Inbox</h1>
            <Dropdown>
                <DropdownTrigger>
                    {(props) =>  <SortButton {...props}/>}
                </DropdownTrigger>
                <DropdownContent>
                    <InboxSortDropdownItem/>
                </DropdownContent>
            </Dropdown>
        </div>
    );
};

export default InboxHeaderSection;