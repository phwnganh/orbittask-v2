import NotificationIcon from "@/assets/icons/notification-icon.svg?react";
import LanguageIcon from "@/assets/icons/language-icon.svg?react";
const HeaderAction = () => {
    const unreadCount = 33;
  return (
    <div className={"flex items-center gap-6 pr-8"}>
      <button
        type={"button"}
        aria-label={"open notifications"}
        className={"relative hover:bg-bg-tertiary p-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-primary"}
      >
        <NotificationIcon className={"w-6 h-6"} />

          {unreadCount > 0 && (
              <span className={"absolute top-1 right-0 min-w-4 h-4 px-1 flex items-center justify-center text-xs font-medium text-text-primary bg-error rounded-full"}>
                  {unreadCount > 99 ? "99+" : unreadCount}
              </span>
          )}
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
