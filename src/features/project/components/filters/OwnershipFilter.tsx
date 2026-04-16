import SegmentedControl from "@/shared/components/SegmentedControl.tsx";
import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";

const OwnershipFilter = () => {
    const {ownership, setOwnership} = useProjectFilterStore()
    return (
        <div className={"flex flex-col gap-1"}>
            <span className={"text-xs text-text-muted font-medium"}>Ownership</span>
            <SegmentedControl options={[
                {label: "All", value: "all"},
                {label: "Created", value: "created"},
                {label: "Joined", value: "joined"}
            ]} value={ownership} onChange={setOwnership}/>
        </div>
    );
};

export default OwnershipFilter;