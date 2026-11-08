import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";
import CloseIcon from '@/assets/icons/close-icon.svg?react'
import Chip from "@/shared/components/Chip.tsx";
const ActiveFilterSummary = () => {
    const {ownership, relevance, status, setOwnership, setRelevance, setStatus, reset} = useProjectFilterStore()
    const hasOwnership = ownership !== "all";
    const hasRelevance = relevance !== "all";
    const hasStatus = status !== "all";

    if(!hasOwnership && !hasRelevance && !hasStatus) return null;
    return (
        <div className={"flex items-center gap-2 flex-wrap"}>
            {hasOwnership &&
            <Chip active onClick={() => setOwnership("all")}>
                {ownership}
                <CloseIcon className={"w-3.5 h-3.5"}/>
            </Chip>
            }

            {hasRelevance &&
            <Chip active onClick={() => setRelevance("all")}>
                {relevance}
                <CloseIcon className={"w-3.5 h-3.5"}/>
            </Chip>
            }

            {hasStatus &&
            <Chip active onClick={() => setStatus("all")}>
                {status}
                <CloseIcon className={"w-3.5 h-3.5"}/>
            </Chip>
            }

            <button type={"reset"} onClick={reset} className={"text-xs text-text-muted hover:text-text-primary"}>Clear All</button>
        </div>
    );
};

export default ActiveFilterSummary;