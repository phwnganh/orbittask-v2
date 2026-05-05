import type {ReactNode} from "react";

type EmptyStateProps = {
    title: string;
    description?: string;
    icon?: ReactNode;
    action?: ReactNode;
}
const EmptyState = ({title, description, icon, action}: EmptyStateProps) => {
    return (
        <div className={"flex flex-col content-center py-10 text-center"}>
            {icon && <div className={"mb-3"}>{icon}</div>}
            <h3 className={"text-lg font-semibold"}>{title}</h3>
            {description && <p className={"text-sm text-text-secondary mt-1"}>{description}</p>}
            {action && <div className={"mt-4"}>{action}</div>}
        </div>
    );
};

export default EmptyState;