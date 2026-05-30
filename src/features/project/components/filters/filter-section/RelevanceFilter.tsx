import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";
import SegmentedControl from "@/shared/components/inputs/SegmentedControl.tsx";

const RelevanceFilter = () => {
    const {relevance, setRelevance} = useProjectFilterStore()
    return (
        <div className={"flex flex-col gap-1"}>
            <span className={"text-xs text-text-muted font-medium"}>Focus</span>
            <SegmentedControl options={[
                {label: "All", value: "all"},
                {label: "Assigned to Me", value: "my_tasks"},
                {label: "Needs Attention", value: "overdue"}
            ]} value={relevance} onChange={setRelevance}/>
        </div>
    );
};

export default RelevanceFilter;