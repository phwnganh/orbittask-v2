import type {ProjectCardItemMenu} from "@/features/project/types/project-card-item-menu.type.ts";

export const getProjectCardItemMenu = (isPinned?: boolean): {
    label: string;
    value: ProjectCardItemMenu
}[] => {
    return [
        {
            label: "Edit",
            value: "edit",
        },
        {
            label: isPinned ? "Unpinned Project" : "Pin Project",
            value: isPinned ? "unpin" : "pin"
        },
        {label: "Archive", value: "archive"},
        {label: "Delete", value: "delete"},
    ]
}