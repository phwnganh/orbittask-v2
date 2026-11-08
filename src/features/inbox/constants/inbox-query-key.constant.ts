export const inboxKeys = {
  all: ["inbox"] as const,
  lists: () => [...inboxKeys.all, "list"] as const,
  list: ({ filter, sort }: { filter: string; sort: string }) =>
    [...inboxKeys.lists(), { filter, sort }] as const,
};
