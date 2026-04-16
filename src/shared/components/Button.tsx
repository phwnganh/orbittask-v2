import type {ButtonHTMLAttributes, ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({children, variant = "primary", size="md", fullWidth = true, className, ...props}: ButtonProps) => {
    const baseClass = "rounded-md font-medium transition duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2.5 text-sm",
        lg: "px-5 py-3 text-base"
    }
    const variants = {
        primary: "bg-primary text-text-primary hover:bg-primary-hover focus:ring-primary",
        secondary: "bg-bg-secondary text-text-secondary hover:bg-secondary-hover focus:ring-bg-secondary",
    }
return (
        <button className={`${baseClass} ${sizes[size]} ${variants[variant]} ${fullWidth ? "w-full" : "w-auto"} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;