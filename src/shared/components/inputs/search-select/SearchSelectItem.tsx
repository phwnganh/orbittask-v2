import type {ReactNode} from "react";

type SearchSelectItemProps = {
    onClick?: () => void;
    children: ReactNode;
}
const SearchSelectItem = ({ onClick, children}: SearchSelectItemProps) => {
    return (
        <div onClick={onClick} className={`px-3 py-2 cursor-pointer rounded-md hover:bg-primary-hover group`}>
            {children}
        </div>
    );
};

export default SearchSelectItem;