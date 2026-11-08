import type { ReactNode } from "react";

type ModalFooterProps = {
  children: ReactNode;
  className?: string;
};
const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return (
    <div
      className={`flex justify-end gap-2 pt-3 border-t border-border-primary ${className}`}
    >
      {children}
    </div>
  );
};

export default ModalFooter;
