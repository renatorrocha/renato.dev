import { BLUR_FADE_DELAY, DATA } from "@/lib/constants";
import { ResumeCard } from "../resume-card";
import BlurFade from "../ui/blur-fade";
import { useTranslation } from "react-i18next";

export function EducationSection() {
    const { t } = useTranslation("education");

    const educationData = t("education", { returnObjects: true }) || [];

    const educationList = Array.isArray(educationData) ? educationData : [];
    return (
        <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-xl font-bold">{t("title")}</h2>
                </BlurFade>

                {educationList.map((education, id) => (
                    <BlurFade
                        key={education.institution}
                        delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                    >
                        <ResumeCard
                            key={education.institution}
                            href={education.href}
                            logoUrl={education.logoUrl}
                            altText={education.institution}
                            title={education.institution}
                            subtitle={education.degree}
                            period={`${education.start} - ${education.end}`}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
