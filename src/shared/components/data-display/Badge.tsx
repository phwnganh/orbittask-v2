import type {HTMLAttributes, ReactNode} from "react";

type BadgeProps = {
    children?: ReactNode;
    count?: number;
    max?: number;
    variant?: "default" | "error" | "success" | "warning";
    className?: string;
} & HTMLAttributes<HTMLSpanElement>
const Badge = ({children, count, max = 99, variant = "default", className, ...props}: BadgeProps) => {
    const displayValue = typeof count === "number" ? count > max ? `${max}+` : count : children;

    if(!displayValue) return null;

    const variants = {
        default: "bg-bg-secondary text-text-primary",
        error: "bg-error text-text-primary",
        success: "bg-success text-text-primary",
        warning: "bg-warning text-text-primary",
    }
    return (
        <span className={`inline-flex items-center justify-center
        min-w-4.5 h-4.5 px-1 text-xs font-medium rounded-full
        ${variants[variant]} ${className}`} {...props}>
            {displayValue}
        </span>
    );
};

export default Badge;