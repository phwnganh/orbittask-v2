import SegmentedControl from "@/shared/components/inputs/SegmentedControl.tsx";
import {useInboxFilterStore} from "@/features/inbox/stores/inbox-filter.store.ts";

const InboxFilters = () => {
    const {filter, setFilter} = useInboxFilterStore()
    return (
        <div className={"flex flex-col gap-1"}>
            <span className={"text-xs text-text-muted font-medium"}>Filters</span>
            <SegmentedControl options={[
                {label: "All", value: "all"},
                {label: "Overdue", value: "overdue"},
                {label: "Due Today", value: "due_today"},
                {label: "High Priority", value: "high_priority"},
                {label: "In Progress", value: "in_progress"}
            ]} value={filter} onChange={setFilter}/>
        </div>
    );
};

export default InboxFilters;