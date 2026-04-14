import NotificationIcon from "@/assets/icons/notification-icon.svg?react";
import LanguageIcon from "@/assets/icons/language-icon.svg?react";
const HeaderAction = () => {
  return (
    <div className={"flex items-center gap-6 pr-8"}>
      <button
        type={"button"}
        aria-label={"open notifications"}
        className={" hover:bg-bg-tertiary p-2 rounded-md transition"}
      >
        <NotificationIcon className={"w-6 h-6"} />
      </button>
      <button
        type={"button"}
        aria-label={"change language"}
        className={"hover:bg-bg-tertiary p-2 rounded-md transition"}
      >
        <LanguageIcon className={"w-6 h-6"} />
      </button>
    </div>
  );
};

export default HeaderAction;
