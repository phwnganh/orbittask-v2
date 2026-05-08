import Input from "@/shared/components/inputs/Input.tsx";
import SearchIcon from '@/assets/icons/search-icon.svg?react'

type MembersSearchProps = {
}
const MembersSearch = ({}: MembersSearchProps) => {

    return (
        <div className={"relative w-full group"}>
            <Input className={"pr-10"}/>
            <SearchIcon className={"absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none transition group-focus-within:text-primary"}/>
        </div>
    );
};

export default MembersSearch;