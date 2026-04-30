import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";
import Pagination from "@/shared/components/Pagination.tsx";
import type {ProjectResponse} from "@/features/project/types/project.type.ts";

const ProjectPaginationSection = ({projects}: {projects?: ProjectResponse}) => {
    const {page, pageSize, setPage} = useProjectFilterStore()
    console.log({
        total: projects?.total,
        pageSize,
        totalPages: Math.ceil((projects?.total ?? 0) / pageSize),
    });
    return (
        <Pagination page={page} pageSize={pageSize} total={projects?.total ?? 0} onPageChange={setPage} />
    );
};

export default ProjectPaginationSection;