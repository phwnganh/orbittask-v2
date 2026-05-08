import Input from "@/shared/components/inputs/Input.tsx";
import SearchIcon from '@/assets/icons/search-icon.svg?react'
import type {ChangeEvent, InputHTMLAttributes} from "react";

type SearchSelectInputProps = {
    keyword: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>
const SearchSelectInput = ({keyword, onChange, placeholder, ...props}: SearchSelectInputProps) => {
    return (
        <div className={"relative w-full group"}>
            <Input {...props} value={keyword} placeholder={placeholder} onChange={onChange} className={"pr-10"}/>
            <SearchIcon className={"absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none transition group-focus-within:text-primary"}/>
        </div>
    );
};

export default SearchSelectInput;