import InboxCard from "@/features/inbox/components/uis/InboxCard.tsx";
import type {Inbox} from "@/features/inbox/types/inbox.type.ts";

type InboxCardsSectionProps = {
    inboxes: Inbox[]
}
const InboxCardsSection = ({inboxes}: InboxCardsSectionProps) => {
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