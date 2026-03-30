import type {HTMLAttributes, ReactNode} from "react";

type CardProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
const Card = ({children, ...props}: CardProps) => {
    const baseClass = "bg-bg-secondary rounded-xl p-4 border border-border-primary transition-all hover:bg-bg-tertiary"
    return (
        <div className={`${baseClass}`} {...props}>
            {children}
        </div>
    );
};

export default Card;