import type {HTMLAttributes} from "react";

type TabListProps = {
    className?: string;
} & HTMLAttributes<HTMLDivElement>
const TabsList = ({className, children, ...props}: TabListProps) => {
    return (
        <div className={`inline-flex items-center gap-1 rounded-lg bg-bg-secondary p-1 border border-border-primary ${className}`} {...props}>
            {children}
        </div>
    );
};

export default TabsList;