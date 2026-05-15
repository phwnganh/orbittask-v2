import Input from "@/shared/components/inputs/Input.tsx";
import SearchIcon from '@/assets/icons/search-icon.svg?react'
import {useEffect, useState} from "react";
import {useDebounce} from "@/shared/hooks/useDebounce.ts";
import {useMemberFilterStore} from "@/features/member/stores/member-filter.store.ts";

type MembersSearchProps = {
}
const MembersSearch = ({}: MembersSearchProps) => {
    const [input, setInput] = useState("")
    const debounced = useDebounce(input, 300)
    const {setSearch} = useMemberFilterStore()
    useEffect(() => {
        setSearch(debounced)
    }, [debounced, setSearch]);
    return (
        <div className={"relative w-full group"}>
            <Input value={input} className={"pr-10"} onChange={e => setInput(e.target.value)} placeholder={"Search members..."}/>
            <SearchIcon className={"absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none transition group-focus-within:text-primary"}/>
        </div>
    );
};

export default MembersSearch;