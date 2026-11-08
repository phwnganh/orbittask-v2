import type {ReactNode} from "react";
import {useDropdownSubmenu} from "@/shared/components/dropdown/DropdownSubmenu.tsx";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";
import ChevronRight from '@/assets/icons/chevron-right-icon.svg?react'
type DropdownSubmenuTriggerProps = {
    children: ReactNode;
}

const DropdownSubmenuTrigger = ({children}: DropdownSubmenuTriggerProps) => {
    const {refs, getReferenceProps} = useDropdownSubmenu()
    return (
        <div ref={refs.setReference} {...getReferenceProps()}>
            <DropdownItem closeOnClick={false}>
                <div className={"flex items-center justify-between w-full"}>
                    <span>{children}</span>
                    <div className={"flex justify-center items-center w-4 h-4 shrink-0"}>
                        <ChevronRight className={"w-4 h-4"}/>
                    </div>

                </div>
            </DropdownItem>
        </div>
    );
};

export default DropdownSubmenuTrigger;