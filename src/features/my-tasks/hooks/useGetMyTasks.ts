import { useQuery } from "@tanstack/react-query";
import { getMyTasksApi } from "@/features/my-tasks/services/my-task.api.ts";
import { myTaskKeys } from "../constants/my-task-query-key.constant";

export const useGetMyTasks = () => {
  return useQuery({
    queryKey: myTaskKeys.lists(),
    queryFn: getMyTasksApi,
  });
};
