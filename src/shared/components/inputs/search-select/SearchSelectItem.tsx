import type {ReactNode} from "react";

type SearchSelectItemProps = {
    selected?: boolean;
    onClick?: () => void;
    children: ReactNode;
}
const SearchSelectItem = ({selected, onClick, children}: SearchSelectItemProps) => {
    return (
        <div onClick={onClick} className={`px-3 py-2 cursor-pointer hover:bg-primary-hover ${selected ? "bg-primary-hover" : ""}`}>
            {children}
        </div>
    );
};

export default SearchSelectItem;