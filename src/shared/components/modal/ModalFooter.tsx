import type {ReactNode} from "react";

type ModalFooterProps = {
    children: ReactNode
}
const ModalFooter = ({children}: ModalFooterProps) => {
    return (
        <div className="flex justify-end gap-2 pt-3 border-t border-border-primary">
            {children}
        </div>
    );
};

export default ModalFooter;