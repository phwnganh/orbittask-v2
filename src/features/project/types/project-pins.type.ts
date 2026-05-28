import type {Project} from "@/features/project/types/project.type.ts";

export type ProjectPin = {
    id: string;
    user_id: string;
    project: Project;
    pinned_at: string;
}