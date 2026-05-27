import type {ReactNode} from "react";
import {createPortal} from "react-dom";
import {motion, AnimatePresence} from "framer-motion";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void
    children: ReactNode
}
const Modal = ({isOpen, onClose, children}: ModalProps) => {
    return createPortal(
        <AnimatePresence mode={"wait"}>
            {isOpen &&
                <div className={"fixed inset-0 z-50 flex items-center justify-center"}>
                    <motion.div className={"absolute inset-0 bg-black/50 backdrop-blur-sm"} onClick={() => onClose()} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}/>

                    <motion.div onClick={e => e.stopPropagation()} className={`relative z-10 w-full max-w-lg rounded-2xl bg-bg-secondary border border-border-primary shadow-lg`}
                    initial={{opacity: 0, scale: 0.95, y: 20}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    exit={{opacity: 0, scale: 0.95, y: 20}}
                    transition={{duration: 0.2}}>
                        {children}
                    </motion.div>
                </div>
            }
        </AnimatePresence>
        ,
        document.body,
    );
};

export default Modal;