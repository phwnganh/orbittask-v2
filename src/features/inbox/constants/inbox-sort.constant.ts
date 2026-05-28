import type {InboxSortFilter} from "@/features/inbox/types/inbox-sort.type.ts";

export const INBOX_SORT_OPTIONS: {label: string; value: InboxSortFilter}[] = [
    {label: "Smart", value: "smart"},
    {label: "Due Today", value: "due_today"},
    {label: "High Priority", value: "high_priority"},
    {label: "In Progress", value: "in_progress"},
    {label: "Nearest Due Date", value: "nearest_due_date"},
]