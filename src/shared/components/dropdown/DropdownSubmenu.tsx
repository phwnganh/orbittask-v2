import {
    autoUpdate,
    flip,
    offset, safePolygon,
    shift,
    useFloating,
    type UseFloatingReturn, useHover, useInteractions,
    type UseInteractionsReturn
} from "@floating-ui/react";
import {createContext, type CSSProperties, type ReactNode, useContext, useMemo, useState} from "react";

type DropdownSubmenuContextType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    refs: UseFloatingReturn["refs"];
    floatingStyles: CSSProperties;
    getReferenceProps: UseInteractionsReturn["getReferenceProps"];
    getFloatingProps: UseInteractionsReturn["getFloatingProps"];
}

const DropdownSubmenuContext = createContext<DropdownSubmenuContextType | null>(null)

export const useDropdownSubmenu = () => {
    const context = useContext(DropdownSubmenuContext);
    if(!context){
        throw new Error("DropdownSubmenu components must be used within DropdownSubmenu");
    }
    return context;
}

type DropdownSubmenuProps = {
    children: ReactNode;
}
const DropdownSubmenu = ({children}: DropdownSubmenuProps) => {
    const [open, setOpen] = useState(false)

    const {refs, floatingStyles, context} = useFloating({
        open,
        onOpenChange: setOpen,
        placement: "right-start",
        strategy: "fixed",
        middleware: [
            offset({
                mainAxis: 4,
                crossAxis: -4
            }),
                flip(),
                shift({padding: 8})
        ],
        whileElementsMounted: autoUpdate
    })

    const hover = useHover(context, {
        handleClose: safePolygon()
    })

    const {getReferenceProps, getFloatingProps} = useInteractions([hover])

    const value = useMemo(() => ({
        open,
        setOpen,
        refs,
        floatingStyles,
        getReferenceProps,
        getFloatingProps,
    }), [
        open, refs, floatingStyles, getReferenceProps, getFloatingProps
    ])
    return (
        <DropdownSubmenuContext.Provider value={value}>
            <div className={"relative"}>
                {children}
            </div>
        </DropdownSubmenuContext.Provider>
    );
};

export default DropdownSubmenu;