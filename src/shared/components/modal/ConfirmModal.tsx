import {BaseModal} from "@/shared/components/modal/index.tsx";
import Button from "@/shared/components/Button.tsx";

type ConfirmModalProps = {
    open: boolean;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onClose: () => void;
}
const ConfirmModal = ({open, title, description, confirmText = "Confirm", cancelText = "Cancel", onConfirm, onClose}: ConfirmModalProps) => {
    return (
        <BaseModal open={open} onClose={onClose}>
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