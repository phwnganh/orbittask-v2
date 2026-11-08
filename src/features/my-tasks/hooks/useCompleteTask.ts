import { useReactQueryClient } from "@/shared/libs/react-query/query-client";
import { useMutation } from "@tanstack/react-query";
import { completeTaskApi } from "../services/my-task.api";
import { myTaskKeys } from "../constants/my-task-query-key.constant";
import type { MyTask } from "../types/my-task.type";
import { taskKeys } from "@/features/task/constants/task-query-key.constant";
import type { Task } from "@/features/task/types/task.type";
import type { Inbox } from "@/features/inbox/types/inbox.type";
import { inboxKeys } from "@/features/inbox/constants/inbox-query-key.constant";

export const useCompleteTask = () => {
  const { get, set, getMany, cancel, invalidate } = useReactQueryClient();

  return useMutation({
    mutationFn: ({
      task_id,
      project_id,
    }: {
      task_id: string;
      project_id: string;
    }) => completeTaskApi({ task_id, project_id }),
    onMutate: async ({ task_id, project_id }) => {
      await Promise.all([
        cancel(taskKeys.lists(project_id)),
        cancel(myTaskKeys.lists()),
        cancel(myTaskKeys.myTaskStatistics()),
        cancel(inboxKeys.lists()),
      ]);

      const taskQueries = getMany<Task[]>(taskKeys.lists(project_id));
      const inboxQueries = getMany<Inbox[]>(inboxKeys.lists());

      const inboxTask = inboxQueries
        .flatMap(([, tasks]) => tasks ?? [])
        .find((task) => task.id === task_id);
      const changingTaskStatus = taskQueries
        .flatMap(([, tasks]) => tasks ?? [])
        .find((task) => task.id === task_id);
      const myTasks = get<MyTask[]>(myTaskKeys.lists());

      const myTask = myTasks?.find((task) => task.id === task_id);

      const oldStatus = changingTaskStatus?.status ?? myTask?.status ?? inboxTask?.status;
      if (!oldStatus || oldStatus === "completed") {
        return undefined;
      }

      const oldTasks = get<Task[]>(taskKeys.list(project_id, oldStatus));
      const completeTasks = get<Task[]>(taskKeys.list(project_id, "completed"));

      const previousMyTasks = myTasks;

      if (changingTaskStatus) {
        const updatedTask = {
          ...changingTaskStatus,
          status: "completed" as const,
        };
        set<Task[]>(
          taskKeys.list(project_id, oldStatus),
          (old) => old?.filter((task) => task.id !== task_id) ?? [],
        );

        set<Task[]>(taskKeys.list(project_id, "completed"), (old) => {
          const tasks = old ?? [];

          return tasks.some((task) => task.id === task_id)
            ? tasks.map((task) => (task.id === task_id ? updatedTask : task))
            : [updatedTask, ...tasks];
        });
      }

      if (myTask) {
        set<MyTask[]>(
          myTaskKeys.lists(),
          (old) => old?.filter((task) => task.id !== task_id) ?? [],
        );
      }

      inboxQueries.forEach(([queryKey]) => {
        set<Inbox[]>(
          queryKey,
          (old) => old?.filter((task) => task.id !== task_id) ?? [],
        );
      });

      return {
        project_id,
        task_id,
        oldStatus,
        oldTasks,
        completeTasks,
        previousMyTasks,
        inboxQueries,
      };
    },
    onError: (_err, _var, context) => {
      if (!context) return;

      set<Task[] | undefined>(
        taskKeys.list(context.project_id, context.oldStatus),
        context.oldTasks,
      );
      set<Task[] | undefined>(
        taskKeys.list(context.project_id, "completed"),
        context.completeTasks,
      );
      set<MyTask[] | undefined>(myTaskKeys.lists(), context.previousMyTasks);

      context.inboxQueries.forEach(([queryKey, previousData]) => {
        set<Inbox[] | undefined>(queryKey, previousData);
      });
    },
    onSettled: (_data, _error, vars) => {
      void invalidate(taskKeys.project(vars.project_id));
      void invalidate(myTaskKeys.lists());
      void invalidate(myTaskKeys.myTaskStatistics());
      void invalidate(inboxKeys.lists());
    },
  });
};
