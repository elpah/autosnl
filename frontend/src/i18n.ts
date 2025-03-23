import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHomeTranslation from "./locales/en/home.json";
import nlHomeTranslation from "./locales/nl/home.json";
import uaHomeTranslation from "./locales/ua/home.json";
import ruHomeTranslation from "./locales/ru/home.json";

import enNavTranslation from "./locales/en/nav.json";
import nlNavTranslation from "./locales/nl/nav.json";
import uaNavTranslation from "./locales/ua/nav.json";
import ruNavTranslation from "./locales/ru/nav.json";

import enWhysTranslation from "./locales/en/whys.json";
import nlWhysTranslation from "./locales/nl/whys.json";
import uaWhysTranslation from "./locales/ua/whys.json";
import ruWhysTranslation from "./locales/ru/whys.json";

import enFooterTranslation from "./locales/en/footer.json";
import nlFooterTranslation from "./locales/nl/footer.json";
import uaFooterTranslation from "./locales/ua/footer.json";
import ruFooterTranslation from "./locales/ru/footer.json";

import enAboutTranslation from "./locales/en/about.json";
import nlAboutTranslation from "./locales/nl/about.json";
import uaAboutTranslation from "./locales/ua/about.json";
import ruAboutTranslation from "./locales/ru/about.json";

import enContactTranslation from "./locales/en/contact.json";
import nlContactTranslation from "./locales/nl/contact.json";
import uaContactTranslation from "./locales/ua/contact.json";
import ruContactTranslation from "./locales/ru/contact.json";

import enFaqTranslation from "./locales/en/faq.json";
import nlFaqTranslation from "./locales/nl/faq.json";
import uaFaqTranslation from "./locales/ua/faq.json";
import ruFaqTranslation from "./locales/ru/faq.json";

import enSeachResultTranslation from "./locales/en/searchResult.json";
import nlSeachResultTranslation from "./locales/nl/searchResult.json";
import uaSeachResultTranslation from "./locales/ua/searchResult.json";
import ruSeachResultTranslation from "./locales/ru/searchResult.json";

import enAdvancedSearchTranslation from "./locales/en/advancedSearch.json";
import nlAdvancedSearchTranslation from "./locales/nl/advancedSearch.json";
import uaAdvancedSearchTranslation from "./locales/ua/advancedSearch.json";
import ruAdvancedSearchTranslation from "./locales/ru/advancedSearch.json";


import enCarPageTranslation from "./locales/en/carPage.json";
import nlCarPageTranslation from "./locales/nl/carPage.json";
import uaCarPageTranslation from "./locales/ua/carPage.json";
import ruCarPageTranslation from "./locales/ru/carPage.json";


const resources = {
  en: {
    home: enHomeTranslation,
    nav: enNavTranslation,
    whys: enWhysTranslation,
    footer: enFooterTranslation,
    about: enAboutTranslation,
    contact: enContactTranslation,
    faq: enFaqTranslation,
    searchResult: enSeachResultTranslation,
    advancedSearch: enAdvancedSearchTranslation,
    carPage: enCarPageTranslation,
  },
  nl: {
    home: nlHomeTranslation,
    nav: nlNavTranslation,
    whys: nlWhysTranslation,
    footer: nlFooterTranslation,
    about: nlAboutTranslation,
    contact: nlContactTranslation,
    faq: nlFaqTranslation,
    searchResult: nlSeachResultTranslation,
    advancedSearch: nlAdvancedSearchTranslation,
    carPage: nlCarPageTranslation,
  },
  ua: {
    home: uaHomeTranslation,
    nav: uaNavTranslation,
    whys: uaWhysTranslation,
    footer: uaFooterTranslation,
    about: uaAboutTranslation,
    contact: uaContactTranslation,
    faq: uaFaqTranslation,
    searchResult: uaSeachResultTranslation,
    advancedSearch: uaAdvancedSearchTranslation,
    carPage: uaCarPageTranslation,
  },
  ru: {
    home: ruHomeTranslation,
    nav: ruNavTranslation,
    whys: ruWhysTranslation,
    footer: ruFooterTranslation,
    about: ruAboutTranslation,
    contact: ruContactTranslation,
    faq: ruFaqTranslation,
    searchResult: ruSeachResultTranslation,
    advancedSearch: ruAdvancedSearchTranslation,
    carPage: ruCarPageTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export { i18n };
