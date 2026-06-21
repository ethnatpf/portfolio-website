import Button from "@/components/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full py-16 text-center  ">
      {/* Violet radial gradient */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2  w-[720px] h-[420px] bg-[radial-gradient(rgba(199,155,255,0.15),transparent_70%)]" />

      <span className="text-violet-300 uppercase text-[12px] font-jetbrains-mono tracking-[0.16em]">
        {t("fullstackDev")}
      </span>

      <p className="mt-6 text-fg-strong font-space-grotesk font-bold text-4xl xl:text-6xl whitespace-pre-line">
        {t("heading")}
      </p>

      <p className="mt-6 text-fg-muted max-w-[36em] mx-auto">
        {t("description")}
      </p>

      <div className="mt-8 flex gap-3 justify-center">
        <Button variant="primary" text={t("viewProjects")} href="#project" />
        <Button variant="outlined" text={t("getInTouch")} href="#contact" />
      </div>
    </section>
  );
}
