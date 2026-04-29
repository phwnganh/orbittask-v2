import type {ReactNode} from "react";
import {useDropdown} from "@/shared/components/dropdown/Dropdown.tsx";

type DropdownItemProps = {
    children: ReactNode;
    onClick?: () => void;
    danger?: boolean;
}
const DropdownItem = ({children, onClick, danger}: DropdownItemProps) => {
    const {setOpen} = useDropdown()

    const handleClick = () => {
        onClick?.()
        setOpen(false)
    }
    return (
        <button onClick={handleClick}
        className={`w-full flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg transition-all duration-150
         hover:bg-elevated-hover active:scale-[0.98] focus:outline-none focus:bg-bg-tertiary ${danger ? "text-error hover:bg-error/20" : "text-text-primary"}`}>
            {children}
        </button>
    );
};

export default DropdownItem;