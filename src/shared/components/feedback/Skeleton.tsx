import type {HTMLAttributes} from "react";

type SkeletonProps = {
    className?: string;
} & HTMLAttributes<HTMLDivElement>
const Skeleton = ({className, ...props}: SkeletonProps) => {
    return (
        <div className={`animate-pulse bg-bg-secondary/60 rounded-md ${className}`} {...props}/>
    );
};

export default Skeleton;