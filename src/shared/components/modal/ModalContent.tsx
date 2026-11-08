import type { ReactNode } from "react";

type ModalContentProps = {
  children: ReactNode;
  className?: string;
};
const ModalContent = ({ children, className }: ModalContentProps) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export default ModalContent;
