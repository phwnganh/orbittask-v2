import type {ReactNode} from "react";
import SearchSelectItem from "@/shared/components/inputs/search-select/SearchSelectItem.tsx";

type SearchSelectListProps<T> = {
    items: T[];
    onSelect: (item: T) => void;

    getKey: (item: T) => string;
    renderItem: (item: T) => ReactNode;
}
const SearchSelectList = <T, >({items, onSelect, getKey, renderItem}: SearchSelectListProps<T>) => {
    return (
        <>
            {items.map(item => {
               const key = getKey(item);

               return (
                   <SearchSelectItem key={key} onClick={() => onSelect(item)}>
                       {renderItem(item)}
                   </SearchSelectItem>
               )
            })}
        </>
    );
};

export default SearchSelectList;