import Button from "@/shared/components/button/Button.tsx";
import AvatarGroup from "@/shared/components/avatar/AvatarGroup.tsx";
import { useMemberStore } from "@/features/member/stores/member.store.ts";
import type { Member } from "@/features/member/types/member.type.ts";
import InviteUserIcon from "@/assets/icons/invite-user-icon.svg?react";
import UsersIcon from "@/assets/icons/users-icon.svg?react";
import ReturnIcon from "@/assets/icons/return-icon.svg?react";
import type { Project } from "../../types/project.type";
type ProjectHeaderProps = {
  project?: Project;
  members?: Member[];
};
const ProjectHeader = ({ project, members }: ProjectHeaderProps) => {
  const { onOpenInviteMemberModal, onOpenManageMemberModal } = useMemberStore();

  return (
    <div className="flex flex-col gap-4 shrink-0">
      <header
        className={
          "flex flex-wrap items-center justify-between gap-3 border-b border-border-primary py-4"
        }
      >
        <Button
          variant={"secondary"}
          fullWidth={false}
          size={"md"}
          className="shrink-0"
        >
          <ReturnIcon className="md:hidden text-text-secondary w-4 h-4 shrink-0" />
          <span className="md:hidden">Projects</span>
          <span className="hidden md:inline">Back to Projects</span>
        </Button>

        <section className="flex w-full items-center justify-start md:justify-end gap-2 md:w-auto md:shrink-0">
          <button
            type="button"
            onClick={onOpenManageMemberModal}
            aria-label={`Manage members${members?.length ? `, ${members.length} members` : ""}`}
            className="md:hidden inline-flex min-h-10 shrink-0 items-center gap-1.5
                 rounded-lg border border-border-primary px-2
                 text-sm font-medium transition-colors
                 hover:bg-bg-secondary"
          >
            <div
              className={"flex justify-center items-center w-4 h-4 shrink-0"}
            >
              <UsersIcon className="text-text-primary" />
            </div>

            <span>Members</span>
            {members && (
              <span className="text-text-secondary">{members.length}</span>
            )}
          </button>

          <button
            type={"button"}
            onClick={onOpenManageMemberModal}
            className={
              "hidden md:flex shrink-0 items-center rounded-md hover:opacity-80 transition-opacity cursor-pointer"
            }
          >
            <AvatarGroup users={members ?? []} max={3} />
          </button>
          <Button
            variant={"primary"}
            fullWidth={false}
            size={"md"}
            className={"flex shrink-0 items-center gap-1.5 sm:gap-2"}
            onClick={onOpenInviteMemberModal}
          >
            <div
              className={"flex justify-center items-center w-4 h-4 shrink-0"}
            >
              <InviteUserIcon className={"text-text-primary"} />
            </div>
            <span>Invite</span>
          </Button>
        </section>
      </header>

      <section className={"flex flex-col min-w-0 gap-1"}>
        <h1 className={"text-xl sm:text-2xl font-bold"}>{project?.title}</h1>
      </section>
      <p className={"text-text-secondary text-sm sm:text-base"}>
        {project?.description}
      </p>
    </div>
  );
};

export default ProjectHeader;
