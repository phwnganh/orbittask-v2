import type {HTMLAttributes, ReactNode} from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;
const Card = ({children, className, ...props}: CardProps) => {
    const baseClass = "bg-bg-secondary rounded-xl p-4 border border-border-primary transition-all hover:bg-bg-tertiary"
    return (
        <div className={`${baseClass} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;