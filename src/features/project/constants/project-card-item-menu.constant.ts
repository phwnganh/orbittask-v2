import type {ProjectCardItemMenu} from "@/features/project/types/project-card-item-menu.type.ts";

export const PROJECT_CARD_ITEM_MENU: {label: string; value: ProjectCardItemMenu}[] = [
    {label: "Edit", value: "edit"},
    {label: "Add to Favourite", value: "favourite"},
    {label: "Pin Project", value: "pin"},
    {label: "Archive", value: "archive"},
    {label: "Delete", value: "delete"},
]