import type { ReactNode } from "react";
import DropdownItem from "./DropdownItem";
import SuccessIcon from "@/assets/icons/success-icon.svg?react";
type DropdownSelectedItemProps = {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
};
const DropdownSelectedItem = ({
  children,
  selected,
  onClick,
}: DropdownSelectedItemProps) => {
  return (
    <DropdownItem onClick={onClick}>
      <span className="flex w-full items-center justify-between">
        {children}
        <span className="w-4 flex justify-end">
          {selected && <SuccessIcon className="h-4 w-4 text-primary" />}
        </span>
      </span>
    </DropdownItem>
  );
};

export default DropdownSelectedItem;
