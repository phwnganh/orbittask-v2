import type {SortFilter} from "@/features/project/types/project-filter.type.ts";

export const SORT_OPTIONS: {label: string; value: SortFilter}[] = [
    {label: "Newest", value: "newest"},
    {label: "Oldest", value: "oldest"},
    {label: "Name A-Z", value: "name_asc"},
    {label: "Name Z-A", value: "name_desc"}
]