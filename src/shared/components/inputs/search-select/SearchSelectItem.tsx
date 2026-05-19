import type {ReactNode} from "react";

type SearchSelectItemProps = {
    onClick?: () => void;
    children: ReactNode;
    disabled?: boolean;
}
const SearchSelectItem = ({ onClick, children, disabled = false}: SearchSelectItemProps) => {
    return (
        <div onClick={disabled ? undefined : onClick} className={`px-3 py-2 transition-colors duration-150 rounded-md ${disabled ? "bg-transparent opacity-50 cursor-not-allowed text-text-muted" : "text-text-primary cursor-pointer bg-bg-secondary/60 hover:bg-bg-tertiary"} group`}>
            {children}
        </div>
    );
};

export default SearchSelectItem;