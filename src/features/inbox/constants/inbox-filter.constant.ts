import type {InboxSort} from "@/features/inbox/types/inbox-filters.type.ts";

export const INBOX_SORT_OPTIONS: {label: string; value: InboxSort}[] = [
    {label: "Smart", value: "smart"},
    {label: "Nearest Due Date", value: "nearest_due_date"},
    {label: "Recently Created", value: "recently_created"}
]