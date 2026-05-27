import {BaseModal} from "@/shared/components/modal/index.tsx";
import Button from "../button/Button.tsx";

type ConfirmModalProps = {
    isOpen: boolean;
    title: string;
    type: "project" | "task" | "";
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onClose: () => void;
    isLoading: boolean;
}
const ConfirmModal = ({isOpen, title, description, type = "project", confirmText = "Confirm", cancelText = "Cancel", onConfirm, onClose, isLoading}: ConfirmModalProps) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <BaseModal.Content>
                <BaseModal.Header title={title} onClose={onClose}/>
                <BaseModal.Body>
                    <p className="text-sm text-text-secondary">
                        Are you sure to delete the <span className={"font-bold"}>{description}</span> {type === "project" ? "project" : "task"}?
                    </p>
                </BaseModal.Body>
                <BaseModal.Footer>
                    <Button variant={"secondary"} fullWidth={false} onClick={onClose}>{cancelText}</Button>
                    <Button fullWidth={false} onClick={onConfirm} className={"text-error"}>{isLoading ? `${confirmText}ing` : confirmText}</Button>
                </BaseModal.Footer>
            </BaseModal.Content>

        </BaseModal>
    );
};

export default ConfirmModal;