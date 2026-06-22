import { type IconType as SiIconType } from "@icons-pack/react-simple-icons";
import { type IconType } from "react-icons";
import clsx from "clsx";

export interface ButtonProps {
  variant: "primary" | "outlined";
  text: string;
  href?: string;
  icon?: IconType | SiIconType;
  target?: string;
}

export default function Button({
  variant,
  text,
  href,
  icon: Icon,
  target,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      className={clsx(
        "rounded-lg py-3 px-4 text-sm font-semibold hover:-translate-y-px transition-transform cursor-pointer",
        variant === "primary" && "bg-violet-300",
        variant === "outlined" && "border border-white/15 text-fg",
        Icon && "flex items-center gap-x-2",
      )}
    >
      {Icon && <Icon />}
      {text}
    </a>
  );
}
