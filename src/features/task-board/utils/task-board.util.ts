export const getTaskStatusHeader = (status: string) => {
    switch (status) {
        case 'todo':
            return "Todo";
        case 'in_progress':
            return "In Progress";
        case 'completed':
            return "Completed";
    }
}