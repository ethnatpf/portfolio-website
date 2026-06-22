import {
  IconType,
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { useTranslations } from "next-intl";

export default function Projects() {
  const tCommon = useTranslations("Common");
  const t = useTranslations("Projects");

  const projects: Array<{
    title: string;
    description: string;
    technologies: Array<{
      icon: IconType;
      label: string;
    }>;
    currentlyBuilding?: boolean;
  }> = [
    {
      title: t("immersionTracker.title"),
      description: t("immersionTracker.description"),
      technologies: [
        {
          icon: SiNextdotjs,
          label: "Next",
        },
        {
          icon: SiReact,
          label: "React",
        },
        {
          icon: SiTypescript,
          label: "Typescript",
        },
        {
          icon: SiPostgresql,
          label: "PostgreSQL",
        },
        {
          icon: SiDocker,
          label: "Docker",
        },
      ],
      currentlyBuilding: true,
    },
  ];

  return (
    <section id="project" className="home-section">
      <h2 className="home-section-h2">{tCommon("project")}</h2>
      <p className="home-section-subtitle">{t("subtitle")}</p>

      <div className="flex flex-col gap-y-3">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="border border-white/20 p-5 rounded-lg flex flex-col gap-3 lg:gap-6 bg-[linear-gradient(rgba(255,255,255,0.024)_0%,rgba(255,255,255,0)_100%)]"
          >
            <div className="flex flex-col gap-1 sm:flex-row lg:justify-between">
              <span className="font-semibold text-2xl text-fg-strong flex-1">
                {proj.title}
              </span>

              {proj.currentlyBuilding ? (
                <span className="text-violet-300 font-semibold ">
                  {t("currentlyBuilding")}
                </span>
              ) : (
                <button className="text-violet-300 cursor-pointer font-semibold max-w-max">
                  {t("viewProject")}
                </button>
              )}
            </div>

            <p className="text-fg-muted max-w-3/4">{proj.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {proj.technologies.map((tech) => (
                <div
                  key={tech.label}
                  className="bg-white/3 border border-white/20 rounded-lg px-2 py-1 flex gap-2 items-center text-[#B6BaC1]"
                >
                  <tech.icon className="w-4 h-4" />
                  <span className="text-[12.5px]  font-jetbrains-mono">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal separator */}
      <div className="h-px w-full bg-white/10 mt-16 lg:mt-24 mb-12 lg:mb-16" />
    </section>
  );
}
