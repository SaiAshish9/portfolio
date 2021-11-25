import { createI18n } from "react-router-i18n";

import { translations } from "languages/translations";

export const locales = ["en", "pt", "hi", "de", "te", "ru", "zh", "fR"];

const translation = {
  en: {},
  pt: {},
  hi: {},
  de: {},
  te: {},
  ru: {},
  zh: {},
  fr: {},
};
translations.forEach((e) => {
  translation["en"][`${e.text}`] = e.en;
  translation["pt"][`${e.text}`] = e.pt;
  translation["hi"][`${e.text}`] = e.hi;
  translation["te"][`${e.text}`] = e.te;
  translation["de"][`${e.text}`] = e.de;
  translation["zh"][`${e.text}`] = e.zh;
  translation["fr"][`${e.text}`] = e.fr;
  translation["ru"][`${e.text}`] = e.ru;
});

const I18n = createI18n(locales, translation);

export default I18n;
