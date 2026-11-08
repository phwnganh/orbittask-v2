import CloseIcon from '@/assets/icons/close-icon.svg?react'
type ModalHeaderProps = {
    title: string;
    onClose?: () => void
}
const ModalHeader = ({title, onClose}: ModalHeaderProps) => {
    return (
        <div className={"flex items-center justify-between border-b border-border-primary pb-2"}>
            <h1 className={"text-sm font-semibold text-text-primary"}>
                {title}
            </h1>

            {onClose && (
                <button onClick={onClose} className={"text-text-muted hover:text-text-primary"}>
                    <CloseIcon className={"w-5 h-5"}/>
                </button>
            )}
        </div>
    );
};

export default ModalHeader;