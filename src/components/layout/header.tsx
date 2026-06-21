import { useTranslations } from "next-intl";
import LanguageSwitch from "@/components/language-switch";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Header() {
  const t = useTranslations("Common");

  const navigationEntries: Array<{
    text: string;
    hash: string;
  }> = [
    {
      text: t("expertise"),
      hash: "expertise",
    },
    {
      text: t("about"),
      hash: "about",
    },
    {
      text: t("project"),
      hash: "project",
    },
    {
      text: t("contact"),
      hash: "contact",
    },
  ];

  return (
    <header className="sticky top-0 w-full bg-ink-950 border-b border-[#111111] h-20 z-20">
      <div className="h-full flex items-center px-4 sm:px-8 lg:px-24 xl:px-42">
        <span className="text-white font-space-grotesk font-bold inline-flex items-center gap-x-2 flex-1">
          <div className=" bg-violet-300 w-2 h-2 rounded-full"></div>
          Nathan Ethier
        </span>

        <div className="flex gap-6 items-center">
          {/* Menu entries container*/}
          <div className="hidden lg:flex gap-x-5 text-ink-400">
            {navigationEntries.map((entry) => (
              <a
                // className="text-sm relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:bg-violet-300 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                className="text-sm hover:text-fg transition-colors"
                href={"#" + entry.hash}
                key={entry.hash}
              >
                {entry.text}
              </a>
            ))}
          </div>

          <LanguageSwitch />

          {/* Github button */}
          <a
            href="https://github.com/ethnatpf/portfolio-website"
            target="_blank"
            className="flex items-center justify-center border border-white/10 rounded-lg w-9 h-9 p-1.5 text-white/50 hover:text-fg transition-colors"
          >
            <SiGithub />
          </a>
        </div>
      </div>
    </header>
  );
}
