import type {BadgeProps} from "@/shared/components/data-display/Badge.tsx";
import type {ProjectHealth} from "@/features/project/types/project.type.ts";

export const PROJECT_STATUS: Record<ProjectHealth, {
    label: string
    variant: BadgeProps["variant"]
}> = {
    on_track: {
        label: "On Track",
        variant: "info"
    },
    at_risk: {
        label: "At Risk",
        variant: "warning"
    },
    completed: {
        label: "Completed",
        variant: "success"
    }
}