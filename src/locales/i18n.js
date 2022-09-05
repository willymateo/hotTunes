import LanguageDetector from "i18next-browser-languagedetector";
import { translationEn } from "./en/translationEn";
import { translationEs } from "./es/translationEs";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import i18next from "i18next";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    debug: import.meta.env.DEV,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: translationEn,
      },
      es: {
        translation: translationEs,
      },
    },
  });

export { i18next };
