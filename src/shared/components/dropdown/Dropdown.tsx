import {createContext, type CSSProperties, type ReactNode, useContext, useState} from "react";
import {
    autoUpdate,
    flip,
    offset,
    shift, size,
    useClick,
    useDismiss,
    useFloating,
    type UseFloatingReturn,
    useInteractions, type UseInteractionsReturn
} from "@floating-ui/react";

type DropdownContextType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    refs: UseFloatingReturn["refs"];
    getReferenceProps: UseInteractionsReturn["getReferenceProps"];
    getFloatingProps: UseInteractionsReturn["getFloatingProps"];
    floatingStyles: CSSProperties;
}

const DropdownContext = createContext<DropdownContextType | null>(null)

export const useDropdown = () => {
    const context = useContext(DropdownContext)
    if(!context) throw new Error("Dropdown components must be used within Dropdown")
    return context;
}

type DropdownProps = {
    children: ReactNode;
    placement?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "right";
    offsetValue?: number;
    matchTriggerWidth?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
const Dropdown = ({children, placement = "bottom-end", offsetValue = 8, open, onOpenChange, matchTriggerWidth = false}: DropdownProps) => {
    const [internalOpen, setInternalOpen] = useState(false)

    const isOpen = open ?? internalOpen;
    const setOpen = onOpenChange ?? setInternalOpen
    const {refs, floatingStyles, context} = useFloating({open: isOpen, onOpenChange: setOpen, placement, strategy: "fixed", middleware: [offset(offsetValue), flip(), shift({ padding: 8 }),  ...(matchTriggerWidth
            ? [
                size({
                    apply({rects, elements}) {
                        Object.assign(elements.floating.style, {
                            width: `${rects.reference.width}px`,
                        });
                    },
                }),
            ]
            : []),],
        whileElementsMounted: autoUpdate});
    const click = useClick(context)
    const dismiss = useDismiss(context)

    const {getReferenceProps, getFloatingProps} = useInteractions([click, dismiss])
    return (
        <DropdownContext.Provider value={{
            open: isOpen,
            setOpen,
            refs,
            floatingStyles,
            getReferenceProps,
            getFloatingProps
        }}>
            {children}
        </DropdownContext.Provider>
    );
};

export default Dropdown;