import Input from "@/shared/components/inputs/Input.tsx";
import SearchIcon from '@/assets/icons/search-icon.svg?react'
import type {ChangeEvent, InputHTMLAttributes, ReactNode} from "react";
import Button from "@/shared/components/button/Button.tsx";

type SearchSelectInputProps = {
    keyword: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    selectedContent?: ReactNode;
    onClearSelected?: () => void;
    onContentClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>
const BaseSelectInput = ({keyword, onChange, placeholder, selectedContent, onClearSelected, onContentClick, ...props}: SearchSelectInputProps) => {
    const hasSelected = !!selectedContent && !keyword;
    return (
        <div className={"relative w-full group"}>
            <Input {...props} value={keyword} placeholder={hasSelected ? "" : placeholder} onChange={onChange} className={"pr-10"}/>
            {hasSelected && (
                <div className={"absolute inset-0 flex items-center px-3 cursor-text"} onClick={() => {
                    onContentClick?.()
                }}>
                    <div className={"flex items-center gap-3 flex-1 min-w-0"}>
                        {selectedContent}
                    </div>
                    <Button fullWidth={false} size={"sm"} variant={"tertiary"} onClick={(e) => {
                        e.stopPropagation()
                        onClearSelected?.()
                        onContentClick?.()
                    }}>Change</Button>
                </div>
            )}
            {!hasSelected && (
                <SearchIcon className={"absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none transition group-focus-within:text-primary"}/>
            )}

        </div>
    );
};

export default BaseSelectInput;