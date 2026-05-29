export const inboxKeys = {
    all: ["inbox"] as const,
    lists: ({filter, sort}: {filter: string, sort: string}) => [...inboxKeys.all, "list", {
        filter,
        sort
    }] as const,
}