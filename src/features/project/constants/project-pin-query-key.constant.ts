export const projectPinKeys = {
    all: ["project_pins"] as const,
    lists: () => [...projectPinKeys.all, "list"] as const,
    list: () => [...projectPinKeys.lists()] as const,
}