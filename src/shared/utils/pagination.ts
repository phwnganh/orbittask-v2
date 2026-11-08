export const getPaginationPages = (current: number, total: number, siblingCount = 1) => {
    const pages: (number | "...")[] = []

    const left = Math.max(current - siblingCount, 1);
    const right = Math.min(current + siblingCount, total);

    if(left > 2){
        pages.push(1, "...")
    }else{
        for(let i = 1; i < left; i++) pages.push(i)
    }

    for(let i = left; i <= right; i++){
        pages.push(i)
    }

    if(right < total - 1){
        pages.push("...", total);
    }else{
        for(let i = right + 1; i <= total; i++) pages.push(i)
    }
    return pages;
}