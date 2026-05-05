import Card from "@/shared/components/data-display/Card.tsx";
import Skeleton from "@/shared/components/feedback/Skeleton.tsx";

const ProjectCardSkeleton = () => {
    return (
        <Card className={"flex flex-col justify-between h-full"}>
            <div className={"flex items-center justify-between"}>
                <Skeleton className={"h-4 w-32"}/>
                <Skeleton className={"h-6 w-6 rounded-md"}/>
            </div>

            <div className={"mt-2 space-y-2"}>
                <Skeleton className={"h-3 w-full"}/>
                <Skeleton className={"h-3 w-5/6"}/>
            </div>
        </Card>
    );
};

export default ProjectCardSkeleton;