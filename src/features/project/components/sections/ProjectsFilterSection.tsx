import ActiveFilterSummary from "@/features/project/components/filters/ActiveFilterSummary.tsx";
import ProjectSearch from "@/features/project/components/uis/ProjectSearch.tsx";
import SortButton from "@/features/project/components/filters/SortButton.tsx";
import OwnershipFilter from "@/features/project/components/filters/OwnershipFilter.tsx";
import RelevanceFilter from "@/features/project/components/filters/RelevanceFilter.tsx";
import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";
import {SORT_OPTIONS} from "@/features/project/constants/project-filter.constant.ts";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import SortDropdownItem from "@/features/project/components/filters/SortDropdownItem.tsx";
const ProjectsFilterSection = () => {
    const {sort, setSort} = useProjectFilterStore()
    const currentSort = SORT_OPTIONS.find(option => option.value === sort)

    return (
        <div className={"flex flex-col gap-6"}>
        <div className={"flex items-start gap-4 justify-between"}>
            <div className={"flex-1 min-w-0"}>
                <ProjectSearch />
            </div>
        <Dropdown placement={"bottom-end"} trigger={({open, ref, ...props}) => <SortButton ref={ref} open={open} {...props}/>}>
            {({close}) =>
                <SortDropdownItem close={close}/>
            }
        </Dropdown>

        </div>
            <div className={"flex items-start gap-6 flex-wrap"}>
                <OwnershipFilter/>
                <RelevanceFilter/>
            </div>
        <ActiveFilterSummary/>
        </div>
    );
};

export default ProjectsFilterSection;