import Modal from "@/shared/components/modal/Modal.tsx";
import ModalHeader from "@/shared/components/modal/ModalHeader.tsx";
import ModalContent from "@/shared/components/modal/ModalContent.tsx";
import ModalFooter from "@/shared/components/modal/ModalFooter.tsx";
import ModalBody from "@/shared/components/modal/ModalBody.tsx";

export const BaseModal = Object.assign(Modal, {
    Header: ModalHeader,
    Content: ModalContent,
    Footer: ModalFooter,
    Body: ModalBody,
})