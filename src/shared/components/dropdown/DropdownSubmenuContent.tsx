import type {ReactNode} from "react";
import {useDropdownSubmenu} from "@/shared/components/dropdown/DropdownSubmenu.tsx";
import {FloatingPortal} from "@floating-ui/react";

type DropdownSubmenuContentProps = {
    children: ReactNode;
    className?: string;
}
const DropdownSubmenuContent = ({children, className}: DropdownSubmenuContentProps) => {
    const {open, refs, floatingStyles, getFloatingProps} = useDropdownSubmenu()

    if(!open) return null;
    return (
        <FloatingPortal>
            <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}
                 className={`z-50 min-w-44 rounded-xl border border-bg-secondary/50 bg-bg-elevated/95 p-1.5 ${className}`}>{children}</div>
        </FloatingPortal>
    );
};

export default DropdownSubmenuContent;