import type {ButtonHTMLAttributes} from "react";

type ChipProps = {
    active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Chip = ({active, className, ...props}: ChipProps) => {
    return (
        <button className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-md transition border ${active ? "bg-primary/15 text-primary border-border-info" : "bg-bg-secondary text-text-secondary border-border-primary hover:bg-secondary-hover"} ${className}`} {...props}/>
    );
};

export default Chip;