import { getTaskPriorityBadgeVariant } from "@/features/task/utils/task-priority.util";
import type { MyTask } from "../types/my-task.type";
import { PRIORITY_BADGE } from "../constants/task-priority.constant";

export const getPriorityDotClass = (priority: MyTask["priority"]) => {
  const variant = getTaskPriorityBadgeVariant(priority);

  return variant
    ? PRIORITY_BADGE[variant].split(" ")[1].replace("text-", "bg-")
    : "bg-primary";
};
