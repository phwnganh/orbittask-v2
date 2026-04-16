import SortIcon from '@/assets/icons/sort-icon.svg?react'
import Button from "@/shared/components/Button.tsx";
import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";
import ActiveFilterSummary from "@/features/project/components/ActiveFilterSummary.tsx";
import SegmentedControl from "@/shared/components/SegmentedControl.tsx";
import ProjectSearch from "@/features/project/components/ProjectSearch.tsx";
const ProjectsFilterActionSection = () => {
    const {ownership, status, setOwnership, setStatus} = useProjectFilterStore()
    return (
        <div className={"flex flex-col gap-6"}>
        <div className={"flex items-center justify-between"}>
            <ProjectSearch />
            <Button variant={"secondary"} fullWidth={false}>
                <SortIcon className={"h-6 w-6"} />
                <span className={"text-sm text-text-primary"}>Sort by</span>
            </Button>
        </div>
            <div className={"flex items-start gap-6 flex-wrap"}>
                <div className={"flex flex-col gap-1"}>
                    <span className={"text-xs text-text-muted font-medium"}>Ownership</span>
                    <SegmentedControl options={[
                        {label: "All", value: "all"},
                        {label: "Created", value: "created"},
                        {label: "Joined", value: "joined"}
                    ]} value={ownership} onChange={setOwnership}/>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <span className={"text-xs text-text-muted font-medium"}>Status</span>
                    <SegmentedControl options={[
                        {label: "Active", value: "active"},
                        {label: "Completed", value: "completed"},
                        {label: "Archived", value: "archived"}
                    ]} value={status} onChange={setStatus}/>
                </div>
            </div>
        <ActiveFilterSummary/>
        </div>
    );
};

export default ProjectsFilterActionSection;