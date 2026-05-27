import type {BadgeProps} from "@/shared/components/data-display/Badge.tsx";
import type {ProjectHealth} from "@/features/project/types/project.type.ts";
import type {ProgressProps} from "@/shared/components/Progress.tsx";

type ProjectStatusConfig = {
    label: string;
    badgeVariant: BadgeProps["variant"];
    progressVariant: ProgressProps["variant"];
}
export const PROJECT_STATUS: Record<ProjectHealth, ProjectStatusConfig> = {
    on_track: {
        label: "On Track",
        badgeVariant: "info",
        progressVariant: "default"
    },
    at_risk: {
        label: "At Risk",
        badgeVariant: "warning",
        progressVariant: "warning"
    },
    completed: {
        label: "Completed",
        badgeVariant: "success",
        progressVariant: "success"
    }
}