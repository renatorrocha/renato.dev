import { BLUR_FADE_DELAY, DATA } from "@/lib/constants";
import BlurFade from "../ui/blur-fade";
import { ProjectCard } from "../project-card";
import { useTranslation } from "react-i18next";

export function ProjectsSection() {
    const { t } = useTranslation("projects");

    const projectsData = t("projects", { returnObjects: true }) || [];

    return (
        <section id="projects">
            <div className="w-full space-y-12 py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                                {t("title")}
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                {t("subtitle")}{" "}
                                <span className="text-primary">
                                    {t("highlight")}
                                </span>
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {t("description")}
                            </p>
                        </div>
                    </div>
                </BlurFade>
                <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
                    {projectsData.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
