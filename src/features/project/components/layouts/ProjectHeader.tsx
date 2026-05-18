import Button from "@/shared/components/button/Button.tsx";
import AvatarGroup from "@/shared/components/avatar/AvatarGroup.tsx";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import type {Member} from "@/features/member/types/member.type.ts";
import {useViewProjectDetail} from "@/features/project/hooks/useViewProjects.ts";

type ProjectHeaderProps = {
    projectId: string;
    members?: Member[];
}
const ProjectHeader = ({projectId, members}: ProjectHeaderProps) => {
    const {onOpenInviteMemberModal, onOpenManageMemberModal} = useMemberStore()
    const {data: project} = useViewProjectDetail(projectId)

    return (
        <>
            <header className={"flex justify-between items-center shrink-0 border-b border-border-primary py-4"}>
                <Button variant={"secondary"} fullWidth={false} size={"md"}>Back to Projects</Button>
                <section className={"flex items-center gap-3"}>
                    <button type={"button"} onClick={onOpenManageMemberModal} className={"hover:opacity-80 transition cursor-pointer"}>
                        <AvatarGroup users={members ?? []} max={3}/>
                    </button>
                    <Button variant={"primary"} fullWidth={false} size={"md"} onClick={onOpenInviteMemberModal}>Invite</Button>
                </section>
            </header>

            <section className={"flex flex-col gap-1"}>
                <h1 className={"text-2xl font-bold"}>{project?.title}</h1>
            </section>
            <p className={"text-text-secondary"}>{project?.description}</p>
        </>
    );
};

export default ProjectHeader;