export const taskKeys = {
    all: ["tasks"] as const,
    lists: () => [...taskKeys.all, "list"] as const
}