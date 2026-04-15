type AvatarProps = {
    avatarUrl?: string;
}
const Avatar = ({avatarUrl}: AvatarProps) => {
    return (
        <div className={"flex justify-center items-center shrink-0 w-7 h-7 text-text-primary text-xs font-semibold"}>
            <img src={avatarUrl} alt={"user avatar"} className={"rounded-full object-cover"}/>
        </div>
    );
};

export default Avatar;