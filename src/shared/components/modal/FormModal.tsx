import type {ReactNode} from "react";
import {BaseModal} from "@/shared/components/modal/index.tsx";
import Button from "@/shared/components/Button.tsx";

type FormModalProps = {
    open: boolean;
    title: string;
    onSubmit: () => void;
    onClose: () => void;
    children: ReactNode;
}
const FormModal = ({open, title, onSubmit, onClose, children}: FormModalProps) => {
    return (
        <BaseModal open={open} onClose={onClose}>
            <BaseModal.Content>
                <BaseModal.Header title={title} onClose={onClose}/>
                <BaseModal.Body>{children}</BaseModal.Body>
                <BaseModal.Footer>
                    <Button variant={"secondary"} fullWidth={false} onClick={onClose}>Cancel</Button>
                    <Button fullWidth={false} onClick={onSubmit}>Save</Button>
                </BaseModal.Footer>
            </BaseModal.Content>
        </BaseModal>
    );
};

export default FormModal;