import { useTranslations } from "next-intl";
import {
  SiDocker,
  SiJavascript,
  SiKubernetes,
  SiNextdotjs,
  SiNuxt,
  SiReact,
  SiTypescript,
  SiVuedotjs,
  type IconType,
} from "@icons-pack/react-simple-icons";

export default function Expertises() {
  const commonT = useTranslations("Common");
  const t = useTranslations("Expertise");

  const expertises: Array<{
    title: string;
    description: string;
    icons: Array<IconType>;
  }> = [
    {
      title: "Javascript & Typescript",
      description: t("jstsDescription"),
      icons: [SiJavascript, SiTypescript],
    },
    {
      title: "Vue & Nuxt",
      description: t("vuenuxtDescription"),
      icons: [SiVuedotjs, SiNuxt],
    },
    {
      title: "React & Next",
      description: t("reactnextDescription"),
      icons: [SiReact, SiNextdotjs],
    },
    {
      title: "Docker & Kubernetes",
      description: t("dockerk8sDescription"),
      icons: [SiDocker, SiKubernetes],
    },
  ];

  return (
    <section id="expertise" className="home-section">
      <h2 className="home-section-h2 ">{commonT("expertise")}</h2>
      <p className="mt-2 mb-6 text-lg text-[#D6D8DD]">{t("subtitle")}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {expertises.map((exp, idx) => (
          <div
            key={exp.title}
            className="h-[160px] border border-white/15 rounded-lg p-4"
          >
            {/* Number and icons container*/}
            <div className="w-full flex justify-between">
              <span className="text-violet-300 font-jetbrains-mono text-sm">
                0{idx}
              </span>

              <div className="text-fg flex gap-2">
                {exp.icons.map((Icon, i) => (
                  <Icon className="w-5 h-5" key={i} />
                ))}
              </div>
            </div>

            {/* Title and subtitle container*/}
            <div className="mt-5">
              <p className="font-space-grotesk text-[19px] font-semibold text-[#F0F0F2] mb-2">
                {exp.title}
              </p>
              <p className="text-ink-400 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
