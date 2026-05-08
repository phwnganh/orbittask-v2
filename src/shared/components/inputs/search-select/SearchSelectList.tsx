import type {ReactNode} from "react";
import SearchSelectItem from "@/shared/components/inputs/search-select/SearchSelectItem.tsx";

type SearchSelectListProps<T> = {
    items: T[];
    onSelect: (item: T) => void;

    getKey: (item: T) => string;
    renderItem: (item: T, isDisabled: boolean) => ReactNode;

    isDisabled?: (item: T) => boolean;
}
const SearchSelectList = <T, >({items, onSelect, getKey, renderItem, isDisabled}: SearchSelectListProps<T>) => {
    return (
        <>
            {items.map(item => {
               const key = getKey(item);
               const disabled = isDisabled?.(item) ?? false

               return (
                   <SearchSelectItem key={key} onClick={() => {
                       if(disabled) return;
                       onSelect(item)
                   }} disabled={disabled}>
                       {renderItem(item, disabled)}
                   </SearchSelectItem>
               )
            })}
        </>
    );
};

export default SearchSelectList;