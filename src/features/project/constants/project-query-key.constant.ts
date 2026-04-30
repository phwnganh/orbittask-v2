
export const projectKeys = {
    all: ["projects"] as const,
    lists: () => [...projectKeys.all, "list"] as const,
    detail: (id: string) => [...projectKeys.all, "detail", id] as const
}