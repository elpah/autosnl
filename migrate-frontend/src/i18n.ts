import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";


i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: [
      "about",
      "advancedSearch",
      "carPage",
      "contact",
      "faq",
      "footer",
      "home",
      "nav",
      "searchResult",
      "whys",
    ],
    defaultNS: "home",
  });

export default i18n;

