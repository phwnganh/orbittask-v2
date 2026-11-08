import {type ButtonHTMLAttributes, forwardRef} from "react";
import {useInboxFilterStore} from "@/features/inbox/stores/inbox-filter.store.ts";
import {INBOX_SORT_OPTIONS} from "@/features/inbox/constants/inbox-filter.constant.ts";
import Button from "@/shared/components/button/Button.tsx";
import SortIcon from '@/assets/icons/sort-icon.svg?react'
import ChevronDownIcon from '@/assets/icons/chevron-icon.svg?react'

type InboxSortButtonProps = {
    open?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>
const InboxSortButton = forwardRef<HTMLButtonElement, InboxSortButtonProps>(({open, className, ...props}, ref) => {
    const {sort} = useInboxFilterStore()
    const currentSort = INBOX_SORT_OPTIONS.find(option => option.value === sort)

    return (
        <Button ref={ref} {...props} variant={"secondary"} fullWidth={false} className={"flex items-center gap-2 px-3"}>
            <SortIcon className={"h-4 w-4 text-text-muted shrink-0"} />
            <span className={"text-sm"}>Sort:
                <span className={"ml-1 font-medium text-text-primary"}>{currentSort?.label}</span>
                </span>
            <ChevronDownIcon className={"h-4 w-4 text-text-muted ml-1"}/>
        </Button>
    )
})

export default InboxSortButton;