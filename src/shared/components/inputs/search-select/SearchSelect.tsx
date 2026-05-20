import {type ChangeEvent, type ReactNode, useState} from "react";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import DropdownContent from "@/shared/components/dropdown/DropdownContent.tsx";
import SearchSelectList from "@/shared/components/inputs/search-select/SearchSelectList.tsx";
import SearchSelectInput from "@/shared/components/inputs/search-select/SearchSelectInput.tsx";

type SearchSelectProps<T> = {
    selected: T[];
    keyword: string;
    onSelected: (value: T) => void;
    onSearch: (keyword: string) => void;
    isDisabled?: (item: T) => boolean;
    items: T[];
    renderItem: (item: T, isDisabled: boolean) => ReactNode;
    getKey: (item: T) => string;
    placeholder?: string;
    selectedContent?: ReactNode;
    onClearSelected?: () => void;
    hideSelectedItem?: boolean;
}
const SearchSelect = <T,>({selected, keyword, onSelected, onSearch, items, renderItem, getKey, placeholder, isDisabled, selectedContent, onClearSelected, hideSelectedItem = true}: SearchSelectProps<T>) => {
    const [open, setOpen] = useState(false)

    const filteredItem = hideSelectedItem ? items.filter(item => !selected.some(selectedItem => getKey(selectedItem) === getKey(item))) : items;

    const handleSelect = (item: T) => {
        onSelected(item)
        onSearch("")
        setOpen(false)
    }
    return (
        <Dropdown matchTriggerWidth open={open} onOpenChange={setOpen}>
            <DropdownTrigger>
                {(props) => (
                    <SearchSelectInput {...props} selectedContent={selectedContent} onClearSelected={onClearSelected} placeholder={placeholder} keyword={keyword} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        onSearch(e.target.value)
                        if(!open){
                            setOpen(true)
                        }
                    }} onContentClick={() => {
                        setOpen(true)
                    }}/>
                )}
            </DropdownTrigger>

            <DropdownContent className={"max-h-60 overflow-auto scrollbar-custom"}>
                <SearchSelectList items={filteredItem} getKey={getKey} renderItem={renderItem} onSelect={handleSelect} isDisabled={isDisabled}/>
            </DropdownContent>
        </Dropdown>
    );
};

export default SearchSelect;