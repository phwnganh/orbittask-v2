import InboxCard from "@/features/inbox/components/uis/InboxCard.tsx";
import type {Inbox} from "@/features/inbox/types/inbox.type.ts";
import InboxCardSkeleton from "@/features/inbox/components/uis/InboxCardSkeleton.tsx";

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
            <div className={"flex flex-col gap-3"}>
                {inboxes.map((inbox) => (
                    <InboxCard key={inbox.id} inbox={inbox}/>
                ))}

            </div>
        </>
    );
};

export default InboxCardsSection;