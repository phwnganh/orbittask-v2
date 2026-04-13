import NotificationIcon from '@/assets/icons/notification-icon.svg?react'
import LanguageIcon from '@/assets/icons/language-icon.svg?react'
const HeaderAction = () => {
    return (
        <div className={"flex items-center gap-6 pr-8"}>
            <button type={"button"} aria-label={"open to view notification"} className={"flex justify-center items-center w-6 h-6 shrink-0"}>
                <NotificationIcon/>
            </button>
            <button type={"button"} aria-label={"click to change another language"} className={"flex justify-center items-center w-6 h-6 shrink-0"}>
                <LanguageIcon/>
            </button>
        </div>
    );
};

export default HeaderAction;