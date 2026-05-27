import {useEffect, useState} from "react";

export const useDebounce = <T>(value: T, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        if(value === debouncedValue) return;
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(timer)
    }, [value, delay])

    return debouncedValue
}