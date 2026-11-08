import {type ReactNode, useMemo, useState} from "react";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import BaseSelectInput from "@/shared/components/inputs/base-select/BaseSelectInput.tsx";
import DropdownContent from "@/shared/components/dropdown/DropdownContent.tsx";
import BaseSelectList from "@/shared/components/inputs/base-select/BaseSelectList.tsx";

type SingleSelectProps<T> = {
    value?: T | null;
    items: T[];
    onChange: (value: T | null) => void;
    getKey: (item: T) => string;
    renderItem: (item: T, isDisabled: boolean) => ReactNode;
    renderValue?: (value: T | null) => ReactNode;
    placeholder?: string;
    isDisabled?: (item: T) => boolean;
    closeOnSelect?: boolean;
}

const SingleSelect = <T,>({value, items, onChange, getKey, renderItem, renderValue, placeholder, isDisabled, closeOnSelect = true}: SingleSelectProps<T>) => {
    const [open, setOpen] = useState(false);
    const selectedKey = useMemo(() => {
        if(!value) return null;
        return getKey(value);
    }, [value, getKey])

    const handleSelect = (item: T) => {
        onChange(item);

        if(closeOnSelect){
            setOpen(false);
        }
    }

    const handleClearSelected = () => {
        onChange(null);
        setOpen(true);
    }
    return (
        <Dropdown matchTriggerWidth open={open} onOpenChange={setOpen}>
            <DropdownTrigger>
                {(props) => (
                    <BaseSelectInput {...props} keyword={""} onChange={() => {}} placeholder={placeholder} selectedContent={renderValue?.(value ?? null)} onContentClick={() => setOpen(true)} onClearSelected={handleClearSelected} readOnly/>
                )}
            </DropdownTrigger>
            <DropdownContent className={"max-h-60 overflow-auto scrollbar-custom"}>
                <BaseSelectList items={items} getKey={getKey} isDisabled={item => {
                    const selected = selectedKey === getKey(item)
                    return (
                       selected || isDisabled?.(item) || false
                    )
                }} onSelect={handleSelect} renderItem={(item, disabled) =>
                renderItem(item, disabled)}/>
            </DropdownContent>
        </Dropdown>
    );
};

export default SingleSelect;