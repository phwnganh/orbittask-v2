import {useProfile} from "@/features/profile/hooks/useProfile.ts";

const HeaderTitle = () => {
    const {data: profile} = useProfile()
  return (
    <div className={"flex items-center gap-2"}>
      <h1 className={"font-bold text-xl text-text-secondary"}>Hello, </h1>
      <span className={"text-lg text-text-primary font-black"}>{profile?.last_name}</span>
    </div>
  );
};

export default HeaderTitle;
