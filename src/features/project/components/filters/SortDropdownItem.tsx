import {SORT_OPTIONS} from "@/features/project/constants/project-filter.constant.ts";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";
import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";
import SuccessIcon from '@/assets/icons/success-icon.svg?react'

type SortDropdownItemProps = {
    close: () => void;
}
const SortDropdownItem = ({close}: SortDropdownItemProps) => {
    const {sort, setSort} = useProjectFilterStore()
    return (
        <>
            {SORT_OPTIONS.map(option => (
                <DropdownItem key={option.value} onClick={() => {
                    setSort(option.value)
                    close();
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

export default SortDropdownItem;