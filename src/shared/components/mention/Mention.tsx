import type { HTMLAttributes } from "react";

type MentionProps = {
  name: string;
} & HTMLAttributes<HTMLSpanElement>;
const Mention = ({ name, className, ...props }: MentionProps) => {
  const normalizedName = name.trim();

  if (!normalizedName) {
    return null;
  }

  return (
    <span className={`font-medium text-text-primary ${className}`} {...props}>
      @{normalizedName}
    </span>
  );
};

export default Mention;
