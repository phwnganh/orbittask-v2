import {BaseModal} from "@/shared/components/modal/index.tsx";
import Button from "../button/Button.tsx";

type ConfirmModalProps = {
    isOpen: boolean;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onClose: () => void;
}
const ConfirmModal = ({isOpen, title, description, confirmText = "Confirm", cancelText = "Cancel", onConfirm, onClose}: ConfirmModalProps) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <BaseModal.Header title={title} onClose={onClose}/>
            <BaseModal.Body>
                <p className="text-sm text-text-secondary">
                    {description}
                </p>
            </BaseModal.Body>
            <BaseModal.Footer>
                <Button variant={"secondary"} fullWidth={false} onClick={onClose}>{cancelText}</Button>
                <Button fullWidth={false} onClick={onConfirm} className={"text-error"}>{confirmText}</Button>
            </BaseModal.Footer>
        </BaseModal>
    );
};

export default ConfirmModal;