import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {inboxKeys} from "@/features/inbox/constants/inbox-query-key.constant.ts";
import {getInboxTasksApi} from "@/features/inbox/services/inbox.api.ts";
import {useInboxFilterStore} from "@/features/inbox/stores/inbox-filter.store.ts";

export const useViewInbox = () => {
    const {sort, filter} = useInboxFilterStore()
    return useQuery({
        queryKey: inboxKeys.lists({filter, sort}),
        queryFn: () => getInboxTasksApi(filter, sort),
        placeholderData: keepPreviousData,
    })
}