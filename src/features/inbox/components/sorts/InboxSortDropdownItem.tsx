import {INBOX_SORT_OPTIONS} from "@/features/inbox/constants/inbox-sort.constant.ts";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";

const InboxSortDropdownItem = () => {
    return (
        <>
            {INBOX_SORT_OPTIONS.map(option => (
                <DropdownItem key={option.value} onClick={() => {

                }}>
                    <span className={"flex items-center justify-between w-full"}>
                        {option.label}
                        <span className={"w-4 flex justify-end"}>
                            {/*{option.value === sort && (*/}
                            {/*    <SuccessIcon className={"w-4 h-4 text-primary"}/>*/}
                            {/*)}*/}
                        </span>

                    </span>
                </DropdownItem>
            ))}
        </>
    );
};

export default InboxSortDropdownItem;