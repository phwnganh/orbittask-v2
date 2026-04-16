import ActiveFilterSummary from "@/features/project/components/filters/ActiveFilterSummary.tsx";
import ProjectSearch from "@/features/project/components/uis/ProjectSearch.tsx";
import SortButton from "@/features/project/components/filters/SortButton.tsx";
import OwnershipFilter from "@/features/project/components/filters/OwnershipFilter.tsx";
import StatusFilter from "@/features/project/components/filters/StatusFilter.tsx";
const ProjectsFilterSection = () => {
    return (
        <div className={"flex flex-col gap-6"}>
        <div className={"flex items-start gap-4 justify-between"}>
            <div className={"flex-1 min-w-0"}>
                <ProjectSearch />
            </div>

            <SortButton/>
        </div>
            <div className={"flex items-start gap-6 flex-wrap"}>
                <OwnershipFilter/>
                <StatusFilter/>
            </div>
        <ActiveFilterSummary/>
        </div>
    );
};

export default ProjectsFilterSection;