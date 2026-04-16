import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";
import SegmentedControl from "@/shared/components/SegmentedControl.tsx";

const StatusFilter = () => {
    const {status, setStatus} = useProjectFilterStore()
    return (
        <div className={"flex flex-col gap-1"}>
            <span className={"text-xs text-text-muted font-medium"}>Status</span>
            <SegmentedControl options={[
                {label: "Active", value: "active"},
                {label: "Completed", value: "completed"},
                {label: "Archived", value: "archived"}
            ]} value={status} onChange={setStatus}/>
        </div>
    );
};

export default StatusFilter;