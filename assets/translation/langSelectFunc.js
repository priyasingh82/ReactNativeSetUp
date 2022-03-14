import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_de from './de/common.json';
import common_en from './en/common.json';

function selectedLanguage() {
    i18next.init({
        interpolation: {
            escapeValue: false
        },
        lng: this.state.selectedLanguage,
        resources: {
            en: {
                common : common_en
            },
            de : {
               common : common_de
            },
        },
    });
}
export default selectedLanguage;