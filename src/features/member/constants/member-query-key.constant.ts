export const memberKeys = {
    all: ["members"] as const,
    lists: () => [...memberKeys.all, "list"] as const,
    list: (params: {
        project_id: string
        search?: string
    })=> [...memberKeys.lists(), params] as const,
}