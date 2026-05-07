import {useQueryClient} from "@tanstack/react-query";

export const useReactQueryClient = () => {
    const queryClient = useQueryClient()

    const get = <T>(key: readonly unknown[]): T | undefined => {
        return queryClient.getQueryData<T>(key)
    }

    const set = <T>(key: readonly unknown[], updater: T | ((old: T | undefined) => T)) => {
        queryClient.setQueryData<T>(key, updater)
    }

    const setMany = <T>(key: readonly unknown[], updater: (old: T | undefined) => T | undefined) => {
        queryClient.setQueriesData<T>({queryKey: key}, updater)
    }

    const cancel = (key: readonly unknown[]) => {
        return queryClient.cancelQueries({queryKey: key})
    }

    const invalidate = (key: readonly unknown[]) => {
        return queryClient.invalidateQueries({queryKey: key})
    }

    const getOne = <T extends {id: string}>(key: readonly unknown[], id: string): T | undefined => {
        const queries = queryClient.getQueriesData<{data: T[]}>({queryKey: key})
        for(const [, value] of queries) {
            if(!value?.data) continue;

            const found = value.data.find(item => item.id === id);
            if(found) return found;
        }
        return undefined;
    }

    return {
        queryClient,
        get,
        set,
        setMany,
        cancel,
        invalidate,
        getOne
    }
}