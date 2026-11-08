export const myTaskKeys = {
      all: ["my-tasks"] as const,
      lists: () => [...myTaskKeys.all, "list"] as const,
      myTaskStatistics: () => [...myTaskKeys.all, "statistics"] as const,
}