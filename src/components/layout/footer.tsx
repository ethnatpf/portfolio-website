import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-[#111111] h-16">
      <div className="h-full flex items-center justify-between px-4 sm:px-8 lg:px-24 xl:px-42 text-fg-faint text-[12.5px] font-jetbrains-mono">
        <span>© {new Date().getFullYear()} Nathan Ethier</span>
        <span>{t("rightText")}</span>
      </div>
    </footer>
  );
}
