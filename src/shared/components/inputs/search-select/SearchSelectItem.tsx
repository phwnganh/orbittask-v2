import type {ReactNode} from "react";

type SearchSelectItemProps = {
    selected?: boolean;
    onClick?: () => void;
    children: ReactNode;
}
const SearchSelectItem = ({selected, onClick, children}: SearchSelectItemProps) => {
    return (
        <div onClick={onClick} className={`px-3 py-2 cursor-pointer rounded-md hover:bg-primary-hover ${selected ? "bg-primary-hover " : ""} group`}>
            {children}
        </div>
    );
};

export default SearchSelectItem;