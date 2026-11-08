type MarkedDotButtonProps = {
  className?: string;
  onClick?: () => void;
};
const MarkedDotButton = ({ className, onClick }: MarkedDotButtonProps) => {
  return (
    <button
      type="button"
      className={`w-5 h-5 rounded-full border border-border-primary hover:bg-text-muted ${className}`}
      onClick={onClick}
    />
  );
};

export default MarkedDotButton;
