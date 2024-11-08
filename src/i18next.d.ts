import { defaultNS } from "./services/i18n/config";
import resources_pt_BR from "./services/i18n/locales/pt-BR";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: typeof resources_pt_BR;
    }
}
