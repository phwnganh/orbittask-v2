import type {HTMLAttributes, ReactNode} from "react";

type BadgeProps = {
    children?: ReactNode;
    count?: number;
    max?: number;
    variant?: "default" | "error" | "success" | "warning" | "info";
    size?: "sm"| "md";
    className?: string;
} & HTMLAttributes<HTMLSpanElement>
const Badge = ({children, count, max = 99, variant = "default", size="md", className, ...props}: BadgeProps) => {
    const displayValue = typeof count === "number" ? count > max ? `${max}+` : count : children;

    if(!displayValue) return null;

    const variants = {
        default: "bg-bg-secondary text-text-primary",
        error: "bg-error text-text-primary border border-border-error",
        success: "bg-success text-text-primary border border-border-success",
        warning: "bg-warning text-text-primary border border-border-warning",
        info: "bg-bg-info text-text-primary border border-border-info"
    }

    const sizes = {
        sm: "px-1.5 text-xs",
        md: "px-2 py-1.5 text-sm",
    }
    return (
        <span className={`inline-flex items-center justify-center
        font-medium rounded-full whitespace-nowrap
        ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {displayValue}
        </span>
    );
};

export default Badge;