import SegmentedControl from "@/shared/components/inputs/SegmentedControl.tsx";
import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";

const StatusFilter = () => {
    const {status, setStatus} = useProjectFilterStore()
    return (
        <div className={"flex flex-col gap-1"}>
            <span className={"text-xs text-text-muted font-medium"}>Status</span>
            <SegmentedControl options={[
                {label: "All", value: "all"},
                {label: "Active", value: "active"},
                {label: "Completed", value: "completed"}
            ]} value={status} onChange={setStatus}/>
        </div>
    );
};

export default StatusFilter;