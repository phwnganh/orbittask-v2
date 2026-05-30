import InboxCard from "@/features/inbox/components/uis/inbox-card/InboxCard.tsx";
import type {Inbox} from "@/features/inbox/types/inbox.type.ts";
import InboxCardSkeleton from "@/features/inbox/components/uis/inbox-card/InboxCardSkeleton.tsx";
import TaskEmpty from "@/features/task/components/uis/states/TaskEmpty.tsx";

type InboxCardsSectionProps = {
    inboxes: Inbox[];
    isLoading?: boolean;
}
const InboxCardsSection = ({inboxes, isLoading}: InboxCardsSectionProps) => {

    if(isLoading){
        return (
            <div className={"flex flex-col gap-3"}>
                {Array.from({length: 5}).map((_, index) => (
                    <InboxCardSkeleton key={index}/>
                ))}
            </div>
        )
    }
    return (
        <>
            {inboxes && inboxes.length > 0 ?
                <div className={"flex flex-col gap-3"}>
                    {inboxes.map((inbox) => (
                        <InboxCard key={inbox.id} inbox={inbox}/>
                    ))}

                </div>
                :
                <div className={"h-full"}>
                    <TaskEmpty/>
                </div>
            }

        </>
    );
};

export default InboxCardsSection;