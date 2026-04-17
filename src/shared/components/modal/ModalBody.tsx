import type {ReactNode} from "react";

type ModalBodyProps = {
    children: ReactNode;
}
const ModalBody = ({children}: ModalBodyProps) => {
    return (
        <div className={"py-3"}>
            {children}
        </div>
    );
};

export default ModalBody;