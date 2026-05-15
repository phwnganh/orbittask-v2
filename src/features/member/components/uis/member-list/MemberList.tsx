import type {Member, MemberResponse} from "@/features/member/types/member.type.ts";
import {type ReactNode} from "react";
import MemberItem from "@/features/member/components/uis/member-list/MemberItem.tsx";

type MemberListProps = {
    users?: Member[] | MemberResponse[];
    renderAction?: (user: Member | MemberResponse) => ReactNode;
}
const MemberList = ({users, renderAction}: MemberListProps) => {
    return (
        <div className={"flex flex-col gap-3"}>
            {users?.map((user) =>
            <MemberItem key={user.user_id} user={user} action={renderAction?.(user)} />)}
        </div>
    );
};

export default MemberList;