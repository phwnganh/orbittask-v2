import InboxCard from "@/features/inbox/components/uis/InboxCard.tsx";

type InboxCardsSectionProps = {
}
const InboxCardsSection = ({}: InboxCardsSectionProps) => {
    return (
        <>
            <div className={"flex flex-col gap-2"}>
                <InboxCard/>
            </div>
        </>
    );
};

export default InboxCardsSection;