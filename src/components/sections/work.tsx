import { BLUR_FADE_DELAY, DATA } from "@/lib/constants";
import BlurFade from "../ui/blur-fade";
import { ResumeCard } from "../resume-card";
import { useTranslation } from "react-i18next";

export function WorkSection() {
    const { t } = useTranslation("work");

    const experiencesData = t("experiences", { returnObjects: true }) ?? [];

    const experiencesList = Array.isArray(experiencesData)
        ? experiencesData
        : [];
    return (
        <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <h2 className="text-xl font-bold">{t("title")}</h2>
                </BlurFade>

                {experiencesList.map((work, id) => (
                    <BlurFade
                        key={work.company}
                        delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                    >
                        <ResumeCard
                            key={work.company}
                            logoUrl={work.logoUrl}
                            altText={work.company}
                            title={work.company}
                            subtitle={work.title}
                            href={work.href}
                            badges={work.badges}
                            period={`${work.start} - ${
                                work.end ?? t("present")
                            }`}
                            description={work.description}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
