import { useTranslations } from "next-intl";
import LanguageSwitch from "@/components/language-switch";

export default function Header() {
  const t = useTranslations("Header");

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
    <header className="static top-0 w-screen border-b border-[#111111] h-20 ">
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
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
