import {useMemo} from "react";
import {getPaginationPages} from "@/shared/utils/pagination.ts";

export const usePagination = ({page, total, pageSize}: {page: number; total: number; pageSize: number}) => {
    const totalPages = Math.ceil(total / pageSize)

    const pages = useMemo(() => {
        return getPaginationPages(page, totalPages)
    }, [page, totalPages])

    return {
        pages,
        totalPages,
        hasPreviousPage: page > 1,
        hasNextPage: page < totalPages,
    }
}