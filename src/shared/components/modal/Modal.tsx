import type {ReactNode} from "react";
import {createPortal} from "react-dom";

type ModalProps = {
    open: boolean;
    onClose: () => void
    children: ReactNode
}
const Modal = ({open, onClose, children}: ModalProps) => {
    return createPortal(
        <div className={"fixed inset-0 z-50 flex items-center justify-center"}>
            <div className={"absolute inset-0 bg-black/50 backdrop-blur-sm"} onClick={onClose}/>

            <div onClick={e => e.stopPropagation()} className={`relative z-10 w-full max-w-lg rounded-2xl bg-bg-secondary border border-border-primary shadow-lg animate-in`}>
                {children}
            </div>
        </div>,
        document.body,
    );
};

export default Modal;