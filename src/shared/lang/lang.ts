import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import i18next from "i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
    },
    ru: {
    },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
  ns: ["auth", "dashboard"],
  nsSeparator: ":"
});


export default i18n;