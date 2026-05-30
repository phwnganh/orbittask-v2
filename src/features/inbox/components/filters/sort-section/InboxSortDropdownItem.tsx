import {INBOX_SORT_OPTIONS} from "@/features/inbox/constants/inbox-filter.constant.ts";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";
import {useInboxFilterStore} from "@/features/inbox/stores/inbox-filter.store.ts";
import SuccessIcon from '@/assets/icons/success-icon.svg?react'
const InboxSortDropdownItem = () => {
    const {sort, setSort} = useInboxFilterStore()
    return (
        <>
            {INBOX_SORT_OPTIONS.map(option => (
                <DropdownItem key={option.value} onClick={() => {
                    setSort(option.value)
                }}>
                    <span className={"flex items-center justify-between w-full"}>
                        {option.label}
                        <span className={"w-4 flex justify-end"}>
                            {option.value === sort && (
                                <SuccessIcon className={"w-4 h-4 text-primary"}/>
                            )}
                        </span>

                    </span>
                </DropdownItem>
            ))}
        </>
    );
};

export default InboxSortDropdownItem;