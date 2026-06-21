"use client";

import { locales } from "@/i18n/constants";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitch() {
  const activeLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function changeLocale(locale: (typeof locales)[number]) {
    router.replace(pathname, { locale });
  }

  return (
    <div className="text-sm text-white border border-white/10 rounded-lg p-1 flex gap-1">
      {locales.map((loc) => (
        <div
          className={clsx(
            "flex items-center py-1 px-2 text-fg-faint hover:text-fg transition-colors",
            loc === activeLocale && "bg-white/20 rounded-lg text-white ",
          )}
          key={loc}
        >
          <button
            onClick={() => changeLocale(loc)}
            className="cursor-pointer uppercase text-sm font-jetbrains-mono"
          >
            {loc}
          </button>
        </div>
      ))}
    </div>
  );
}
