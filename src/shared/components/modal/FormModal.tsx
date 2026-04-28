import type {FormEvent, ReactNode} from "react";
import {BaseModal} from "@/shared/components/modal/index.tsx";
import Button from "../button/Button.tsx";

type FormModalProps = {
    isOpen: boolean;
    title: string;
    onSubmit: (e?: FormEvent) => void;
    onClose: () => void;
    children: ReactNode;
    isLoading?: boolean;
}
const FormModal = ({isOpen, title, onSubmit, onClose, children, isLoading}: FormModalProps) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <BaseModal.Content>
                <BaseModal.Header title={title} onClose={onClose}/>
                <form onSubmit={onSubmit}>
                    <BaseModal.Body>{children}</BaseModal.Body>
                    <BaseModal.Footer>
                        <Button variant={"secondary"} fullWidth={false} onClick={onClose}>Cancel</Button>
                        <Button type={"submit"} fullWidth={false}>{isLoading ? "Saving..." : "Save"}</Button>
                    </BaseModal.Footer>
                </form>
            </BaseModal.Content>
        </BaseModal>
    );
};

export default FormModal;