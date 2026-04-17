import type {HTMLAttributes} from "react";

type ProgressProps = {
    value: number;
    size?: "sm" | "md";
    variant?: "default" | "success" | "warning" | "error";
    showLabel?: boolean;
} & HTMLAttributes<HTMLDivElement>;
const Progress = ({value, size = "md", variant = "default", showLabel = false, className, ...props}: ProgressProps) => {
    const clamped = Math.min(100, Math.max(0, value));

    const sizeClass = {
        sm: "h-1.5",
        md: "h-2"
    }

    const variantClass = {
        default: "bg-primary",
        success: "bg-success",
        warning: "bg-warning",
        error: "bg-error"
    }
    return (
        <div className={`flex flex-col gap-1 ${className}`} {...props}>
            <div className={`w-full rounded-full bg-bg-tertiary overflow-hidden ${sizeClass[size]}`}>
                <div className={`h-full rounded-full transition-all duration-300 ${variantClass[variant]}`} style={{width: `${clamped}%`}}>
                    {showLabel && (
                        <span className={"text-xs text-text-muted"}>{clamped}%</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Progress;