import type {ReactNode} from "react";
import SearchSelectItem from "@/shared/components/inputs/search-select/SearchSelectItem.tsx";

type SearchSelectListProps<T> = {
    items: T[];
    selectedItem: T | null;
    onSelect: (item: T) => void;

    getKey: (item: T) => string;
    renderItem: (item: T, selected: boolean) => ReactNode;
}
const SearchSelectList = <T, >({items, selectedItem, onSelect, getKey, renderItem}: SearchSelectListProps<T>) => {
    return (
        <>
            {items.map(item => {
               const key = getKey(item);
               const selected = selectedItem !== null && getKey(selectedItem) === key;

               return (
                   <SearchSelectItem key={key} selected={selected} onClick={() => onSelect(item)}>
                       {renderItem(item, selected)}
                   </SearchSelectItem>
               )
            })}
        </>
    );
};

export default SearchSelectList;