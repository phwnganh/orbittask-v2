import type {Profile} from "@/features/auth/types/auth.type.ts";

type HeaderTitleProps = {
    profile?: Profile
}
const HeaderTitle = ({profile}: HeaderTitleProps) => {
  return (
    <div className={"flex items-center gap-2"}>
      <h1 className={"font-bold text-xl text-text-secondary"}>Hello, </h1>
      <span className={"text-lg text-text-primary font-black"}>{profile?.last_name}</span>
    </div>
  );
};

export default HeaderTitle;
