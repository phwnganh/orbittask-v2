
export const projectKeys = {
    all: ["projects"] as const,
    lists: () => [...projectKeys.all, "list"] as const,
    list: (params: {
        search?: string;
        page: number;
        pageSize: number;
    }) => [...projectKeys.lists(), params] as const,
    detail: (id: string) => [...projectKeys.all, "detail", id] as const
}