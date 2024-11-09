import { BLUR_FADE_DELAY, DATA } from "@/lib/constants";
import Markdown from "react-markdown";
import BlurFade from "../ui/blur-fade";
import { useTranslation } from "react-i18next";

export function AboutSection() {
    const { t } = useTranslation("about");

    return (
        <section id="about">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-xl font-bold">{t("aboutMe")}</h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <Markdown className="prose dark:prose-invert max-w-full text-pretty font-sans text-sm text-secondary">
                    {t("resume")}
                </Markdown>
            </BlurFade>
        </section>
    );
}
