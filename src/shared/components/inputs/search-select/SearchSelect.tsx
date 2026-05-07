import {type ReactNode} from "react";
import Input from "@/shared/components/inputs/Input.tsx";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import DropdownContent from "@/shared/components/dropdown/DropdownContent.tsx";
import SearchSelectList from "@/shared/components/inputs/search-select/SearchSelectList.tsx";

type SearchSelectProps<T> = {
    selected: T | null;
    keyword: string;
    onSelected: (value: T) => void;
    onSearch: (keyword: string) => void;

    items: T[];
    renderItem: (item: T, isSelected: boolean) => ReactNode;
    getKey: (item: T) => string;
    placeholder?: string;
}
const SearchSelect = <T,>({selected, keyword, onSelected, onSearch, items, renderItem, getKey, placeholder}: SearchSelectProps<T>) => {

    return (
        <Dropdown>
            <DropdownTrigger>
                {(props) => (
                    <Input {...props} value={keyword}
                    placeholder={placeholder}
                    onChange={e => onSearch(e.target.value)}/>
                )}
            </DropdownTrigger>

            <DropdownContent className={"w-full max-h-60 overflow-auto"}>
                <SearchSelectList items={items} getKey={getKey} renderItem={renderItem} onSelect={onSelected} selectedItem={selected}/>
            </DropdownContent>
        </Dropdown>
    );
};

export default SearchSelect;