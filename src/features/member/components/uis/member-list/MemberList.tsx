import type {Member, MemberResponse} from "@/features/member/types/member.type.ts";
import {type ReactNode} from "react";
import MemberItem from "@/features/member/components/uis/member-list/MemberItem.tsx";
import type {Profile} from "@/features/auth/types/auth.type.ts";

type MemberListProps = {
    users?: Member[] | MemberResponse[];
    renderAction?: (user: Member | MemberResponse) => ReactNode;
    showRole?: boolean;
    me?: Profile | null;
}
const MemberList = ({users, renderAction, showRole, me}: MemberListProps) => {
    return (
        <div className={"flex flex-col gap-3"}>
            {users?.map((user) =>
            <MemberItem me={me} showRole={showRole} key={user.user_id} user={user} action={renderAction?.(user)} />)}
        </div>
    );
};

export default MemberList;