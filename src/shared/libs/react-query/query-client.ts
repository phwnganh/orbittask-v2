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

    return {
        queryClient,
        get,
        set,
        setMany,
        cancel,
        invalidate,
    }
}