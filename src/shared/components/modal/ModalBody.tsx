import type {ReactNode} from "react";

type ModalBodyProps = {
    className?: string;
    children: ReactNode;
}
const ModalBody = ({children, className}: ModalBodyProps) => {
    return (
        <div className={`px-6 py-4 overflow-y-auto ${className}`}>
            {children}
        </div>
    );
};

export default ModalBody;