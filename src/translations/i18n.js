import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { translationEn } from "./en/translationEn";
import { translationEs } from "./es/translationEs";
import i18next from "i18next";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
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
