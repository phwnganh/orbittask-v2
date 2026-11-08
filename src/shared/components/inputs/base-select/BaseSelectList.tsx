import type {ReactNode} from "react";
import BaseSelectItem from "@/shared/components/inputs/base-select/BaseSelectItem.tsx";

type SearchSelectListProps<T> = {
    items: T[];
    onSelect: (item: T) => void;

    getKey: (item: T) => string;
    renderItem: (item: T, isDisabled: boolean) => ReactNode;

    isDisabled?: (item: T) => boolean;
}
const BaseSelectList = <T, >({items, onSelect, getKey, renderItem, isDisabled}: SearchSelectListProps<T>) => {
    return (
        <>
            {items.map(item => {
               const key = getKey(item);
               const disabled = isDisabled?.(item) ?? false

               return (
                   <BaseSelectItem key={key} onClick={() => {
                       if(disabled) return;
                       onSelect(item)
                   }} disabled={disabled}>
                       {renderItem(item, disabled)}
                   </BaseSelectItem>
               )
            })}
        </>
    );
};

export default BaseSelectList;