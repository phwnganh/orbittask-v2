import type {SortFilter} from "@/features/project/types/project-filter.type.ts";

export const SORT_OPTIONS: {label: string; value: SortFilter}[] = [
    {label: "Smart", value: "smart"},
    {label: "Most Overdue", value: "overdue_desc"},
    {label: "Most My Tasks", value: "my_tasks_desc"},
    {label: "Newest First", value: "newest"},
    {label: "Oldest First", value: "oldest"},
    {label: "Name (A → Z)", value: "name_asc"},
    {label: "Name (Z → A)", value: "name_desc"}
]