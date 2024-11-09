import * as Flags from "country-flag-icons/react/3x2";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function LanguageToggleButton() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "en-US" ? "pt-BR" : "en-US";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <Button
            variant="ghost"
            type="button"
            size="icon"
            onClick={toggleLanguage}
        >
            <Flag
                countryCode={getCountryCode(i18n.language)}
                className="w-5 rounded-sm"
            />
        </Button>
    );
}

function getCountryCode(languageCode: string) {
    const countryMapping: Record<string, string> = {
        "en-US": "US",
        "pt-BR": "BR",
    };

    return countryMapping[languageCode] || "US";
}

type FlagProps = {
    countryCode: string;
    className?: string;
};

const Flag = ({ countryCode, className }: FlagProps) => {
    const FlagComponent =
        Flags[countryCode.toUpperCase() as keyof typeof Flags];

    if (!FlagComponent) {
        console.error(`Flag for country code ${countryCode} not found.`);
        return null;
    }

    return <FlagComponent key={countryCode} className={className} />;
};
