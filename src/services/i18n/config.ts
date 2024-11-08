import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import i18next from "i18next";
import resources_pt_BR from "@/services/i18n/locales/pt-BR";
import resources_en_US from "@/services/i18n/locales/en-US";

export const defaultNS = "home";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["pt-BR", "en-US"],
        fallbackLng: ["en-US", "pt-BR"],
        debug: true,
        load: "currentOnly",
        defaultNS,
        returnObjects: true,
        resources: {
            "pt-BR": resources_pt_BR,
            "en-US": resources_en_US,
        },
    });

i18next.loadLanguages(["pt-BR", "en-US"]);

export default i18next;
