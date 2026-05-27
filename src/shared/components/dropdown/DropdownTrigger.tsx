import {useDropdown} from "@/shared/components/dropdown/Dropdown.tsx";
import type {ReactElement} from "react";

type DropdownTriggerProps = {
    children: (props: any) => ReactElement;
};

const DropdownTrigger = ({children}: DropdownTriggerProps) => {
    const {refs, getReferenceProps} = useDropdown()

    const referenceProps = getReferenceProps({
        ref: refs.setReference,
    });

    return children(referenceProps);
};

export default DropdownTrigger;