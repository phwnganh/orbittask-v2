import Alert from "./Alert";

type ToastProps = {
  variant: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  onClose: () => void;
  duration?: number
};
const Toast = ({ variant, title, message, onClose, duration }: ToastProps) => {
  return <div className="fixed left-1/2 -translate-x-1/2 top-4 z-100 w-[calc(100%-2rem)] max-w-sm">
      <Alert
        variant={variant}
        title={title}
        message={message}
        onClose={onClose}
        autoClose
        duration={duration}
        className="shadow-lg"
      />

  </div>;
};

export default Toast;
