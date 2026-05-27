import Card from "@/shared/components/data-display/Card.tsx";
import Skeleton from "@/shared/components/feedback/Skeleton.tsx";

const ProjectCardSkeleton = () => {
    return (
        <Card className={"flex flex-col gap-4 h-full"}>
            <div className={"flex items-start justify-between"}>
                <div className={"flex flex-col gap-2 flex-1"}>
                    <div className={"flex items-center gap-2"}>
                        <Skeleton className={"h-5 w-32"}/>
                        <Skeleton className={"h-5 w-20 rounded-md"}/>
                    </div>

                    <div className={"space-y-2"}>
                        <Skeleton className={"h-3 w-full"}/>
                        <Skeleton className={"h-3 w-5/6"}/>
                    </div>
                </div>

                <Skeleton className={"h-8 w-8 rounded-md"}/>
            </div>

            <div className={"flex flex-col gap-2"}>
                <div className={"flex items-center justify-between"}>
                    <Skeleton className={"h-3 w-16"}/>
                    <Skeleton className={"h-3 w-10"}/>
                </div>

                <Skeleton className={"h-2 w-full rounded-full"}/>

                <div className={"flex items-center justify-between"}>
                    <Skeleton className={"h-3 w-24"}/>
                    <Skeleton className={"h-3 w-16"}/>
                </div>
            </div>

            <div className={"flex items-center justify-between"}>
                <div className={"flex items-center gap-1"}>
                    <Skeleton className={"h-6 w-6 rounded-full"}/>
                    <Skeleton className={"h-6 w-6 rounded-full"}/>
                    <Skeleton className={"h-6 w-6 rounded-full"}/>
                </div>

                <Skeleton className={"h-3 w-20"}/>
            </div>
        </Card>
    );
};

export default ProjectCardSkeleton;