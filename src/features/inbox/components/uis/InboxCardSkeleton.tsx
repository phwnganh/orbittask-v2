import Card from "@/shared/components/data-display/Card.tsx";
import Skeleton from "@/shared/components/feedback/Skeleton.tsx";

const InboxCardSkeleton = () => {
    return (
        <Card>
            <div className={"flex items-start gap-3"}>
                <Skeleton className={"mt-0.5 w-5 h-5 rounded-full shrink-0"}/>

                <div className={"flex-1 min-w-0"}>
                    <div className={"flex items-center gap-2"}>
                        <Skeleton className={"h-5 w-40"}/>
                        <Skeleton className={"h-5 w-16 rounded-full"}/>
                    </div>

                    <div className={"mt-1.5 flex items-center gap-2"}>
                        <Skeleton className={"h-3 w-20"} />
                        <Skeleton className={"w-1 h-1 rounded-full"} />
                        <Skeleton className={"h-3 w-24"} />
                    </div>

                    <Skeleton className={"mt-2 h-5 w-20 rounded-full"} />

                    <Skeleton
                        className={"mt-2 h-4 w-3/4"}
                    />
                </div>
                <Skeleton className={"w-8 h-8 rounded-lg shrink-0"} />
            </div>
        </Card>
    );
};

export default InboxCardSkeleton;