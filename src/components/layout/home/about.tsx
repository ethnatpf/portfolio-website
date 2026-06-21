import { useTranslations } from "next-intl";

export default function About() {
  const tCommon = useTranslations("Common");
  const t = useTranslations("About");

  return (
    <section id="about" className="home-section">
      {/* Horizontal separator */}
      <div className="h-px w-full bg-white/10 mt-16 lg:mt-32 mb-12 lg:mb-16" />

      <div className="sm:flex gap-x-6 justify-between ">
        <h2 className="home-section-h2 mb-3 sm:mb-0">{tCommon("about")}</h2>
        <p className="max-w-[32em] text-ink-200 text-lg lg:text-xl">
          {t("description")}
        </p>
      </div>

      {/* Horizontal separator */}
      <div className="h-px w-full bg-white/10 my-12 lg:my-16" />
    </section>
  );
}
