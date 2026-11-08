import type {ReactNode} from "react";
import {useDropdown} from "@/shared/components/dropdown/Dropdown.tsx";
import {FloatingPortal} from "@floating-ui/react";

type DropdownContentProps = {
    children: ReactNode
    className?: string
}
const DropdownContent = ({children, className}: DropdownContentProps) => {
    const {open, refs, floatingStyles, getFloatingProps} = useDropdown()


    return (
        <FloatingPortal>
            {open &&
                <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}
                     className={`z-50 min-w-52 rounded-xl border border-bg-secondary/50 
        bg-bg-elevated/95 backdrop-blur-md shadow-2xl p-1.5
        ${className}`}>
                    {children}
                </div>
            }

        </FloatingPortal>

    );
};

export default DropdownContent;