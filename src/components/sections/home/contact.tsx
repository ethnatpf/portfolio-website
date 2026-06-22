import Button from "@/components/button";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslations } from "next-intl";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="home-section text-center flex flex-col gap-y-5 lg:gap-y-7 mb-12 lg:mb-16"
    >
      <h1 className="font-space-grotesk text-fg-strong text-4xl font-semibold">
        {t("title")}
      </h1>
      <p className="text-ink-300">{t("description")}</p>

      {/* Buttons container */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          variant="outlined"
          text="Email"
          icon={MdOutlineEmail}
          href="mailto:ethnatpf@gmail.com"
        />
        <Button
          variant="outlined"
          text="Github"
          icon={SiGithub}
          target="_blank"
          href="https://github.com/ethnatpf"
        />
        <Button
          variant="outlined"
          text="LinkedIn"
          icon={FaLinkedin}
          target="_blank"
          href="https://www.linkedin.com/in/ethnatpf"
        />
      </div>
    </section>
  );
}
