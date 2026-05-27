import type {ReactNode} from "react";

type ModalBodyProps = {
    className?: string;
    children: ReactNode;
}
const ModalBody = ({children, className}: ModalBodyProps) => {
    return (
        <div className={`py-3 ${className}`}>
            {children}
        </div>
    );
};

export default ModalBody;