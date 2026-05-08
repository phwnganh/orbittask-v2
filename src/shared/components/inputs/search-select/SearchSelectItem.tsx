import type {ReactNode} from "react";

type SearchSelectItemProps = {
    onClick?: () => void;
    children: ReactNode;
    disabled?: boolean;
}
const SearchSelectItem = ({ onClick, children, disabled = false}: SearchSelectItemProps) => {
    return (
        <div onClick={disabled ? undefined : onClick} className={`px-3 py-2 cursor-pointer rounded-md ${disabled ? "bg-secondary-hover cursor-not-allowed text-text-secondary" : "cursor-pointer hover:bg-primary-hover"} group`}>
            {children}
        </div>
    );
};

export default SearchSelectItem;