import clsx from "clsx";

export interface ButtonProps {
  variant: "primary" | "outlined";
  text: string;
  href?: string;
}

export default function Button({ variant, text, href }: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        "rounded-lg py-3 px-4 text-sm font-semibold hover:-translate-y-px transition-transform cursor-pointer",
        variant === "primary" && "bg-violet-300",
        variant === "outlined" && "border border-white/15 text-fg",
      )}
    >
      {text}
    </a>
  );
}
