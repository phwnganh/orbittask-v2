import type {ReactNode} from "react";

type ModalContentProps = {
    children: ReactNode
}
const ModalContent = ({children}: ModalContentProps) => {
    return (
        <div className={"p-4"}>
            {children}
        </div>
    );
};

export default ModalContent;