import {cloneElement, isValidElement, type ReactNode, useState} from "react";
import {autoUpdate, flip, offset, shift, useClick, useDismiss, useFloating, useInteractions} from "@floating-ui/react";

type DropdownProps = {
    trigger: (props: any) => ReactNode;
    children: ReactNode;
    className?: string;
    placement?: | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "right";
    offsetValue?: number;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
};
const Dropdown = ({trigger, children, className, placement = "bottom-end", offsetValue = 8, open, onOpenChange, disabled = false}: DropdownProps) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpenDropdown = open ?? internalOpen;
    const setOpenDropdown = onOpenChange ?? setInternalOpen;
    const {refs, floatingStyles, context} = useFloating({
        open: isOpenDropdown,
        onOpenChange: setOpenDropdown,
        placement,
        strategy: "fixed",
        middleware: [
            offset(offsetValue),
            flip(),
            shift({padding: 8})
        ],
        whileElementsMounted: autoUpdate
    })
    // click trigger
    const click = useClick(context, {
        enabled: !disabled
    })
    // click outside + esc
    const dismiss = useDismiss(context)
    const {getReferenceProps, getFloatingProps} = useInteractions([click, dismiss])
    return (
        <>
            {typeof trigger === "function" ? trigger({open: isOpenDropdown, ref: refs.setReference, ...getReferenceProps()}) : isValidElement(trigger) && cloneElement(trigger as any, {
                ref: refs.setReference,
                ...getReferenceProps()
            })}

            {isOpenDropdown && (
                <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} className={`
            min-w-52 rounded-xl border border-bg-secondary/50 bg-bg-primary/95 backdrop-blur-md shadow-xl p-1.5
            ${className}
          `} data-state={isOpenDropdown ? "open" : "closed"}>{children}</div>
            )}
        </>
    );
};

export default Dropdown;