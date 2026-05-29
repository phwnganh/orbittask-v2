import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import DropdownContent from "@/shared/components/dropdown/DropdownContent.tsx";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import InboxSortDropdownItem from "@/features/inbox/components/filters/InboxSortDropdownItem.tsx";
import InboxSortButton from "@/features/inbox/components/uis/InboxSortButton.tsx";
import InboxFilters from "@/features/inbox/components/filters/InboxFilters.tsx";
const InboxFiltersSection = () => {
    return (
        <div className={"flex flex-col gap-6"}>
            <div className={"flex items-center gap-4 justify-between"}>
                <InboxFilters/>
                <Dropdown>
                    <DropdownTrigger>
                        {(props) =>  <InboxSortButton {...props}/>}
                    </DropdownTrigger>
                    <DropdownContent>
                        <InboxSortDropdownItem/>
                    </DropdownContent>
                </Dropdown>
            </div>
        </div>
    );
};

export default InboxFiltersSection;