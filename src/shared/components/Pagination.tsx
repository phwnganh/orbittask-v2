import Button from "@/shared/components/button/Button.tsx";
import {usePagination} from "@/shared/hooks/usePagination.ts";

type PaginationProps = {
    page: number;
    total: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}
const Pagination = ({page, total, pageSize, onPageChange}: PaginationProps) => {
    const {pages, totalPages, hasPreviousPage, hasNextPage} = usePagination({page, total, pageSize})

    if(totalPages <= 1) return;
    return (
        <div className={"flex items-center justify-center gap-2 mt-4 flex-wrap"}>
            <Button variant={"secondary"} size={"sm"} fullWidth={false} onClick={() => onPageChange(page - 1)} disabled={!hasPreviousPage}>Prev</Button>

            <div className={"flex items-center gap-1"}>
                {pages.map((p, index) => p === "..." ? (
                    <span key={index} className={"px-2 text-text-muted"}>...</span>
                ) : (
                    <Button key={p} size={"sm"} fullWidth={false} variant={p === page ? "primary" : "secondary"} onClick={() => onPageChange(p)}>{p}</Button>
                ))}
            </div>
            <Button variant={"secondary"} size={"sm"} fullWidth={false} onClick={() => onPageChange(page + 1)} disabled={!hasNextPage}>Next</Button>
        </div>
    );
};

export default Pagination;