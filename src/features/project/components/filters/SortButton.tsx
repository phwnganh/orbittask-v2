import Button from "../../../../shared/components/button/Button.tsx";
import SortIcon from '@/assets/icons/sort-icon.svg?react'
import ChevronDownIcon from '@/assets/icons/chevron-icon.svg?react'
import {SORT_OPTIONS} from "@/features/project/constants/project-filter.constant.ts";
import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";
import {type ButtonHTMLAttributes, forwardRef} from "react";

type SortButtonProps = {
    open?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const SortButton = forwardRef<HTMLButtonElement, SortButtonProps>(({open, className, ...props}, ref) => {
    const {sort} = useProjectFilterStore()
    const currentSort = SORT_OPTIONS.find(option => option.value === sort)

    return (
        <Button ref={ref} {...props} variant={"secondary"} fullWidth={false} className={"flex items-center gap-2 px-3"}>
            <SortIcon className={"h-4 w-4 text-text-muted shrink-0"} />
            <span className={"text-sm"}>Sort:
                <span className={"ml-1 font-medium text-text-primary"}>{currentSort?.label}</span>
                </span>
            <ChevronDownIcon className={"h-4 w-4 text-text-muted ml-1"}/>
        </Button>
    );
})
SortButton.displayName = "SortButton";

export default SortButton;