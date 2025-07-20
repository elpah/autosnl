import { useTranslation } from "react-i18next";

export const useFaqs = () => {
  const { t } = useTranslation("faq");

  return [
    {
      id: 1,
      title: t("question1.title"),
      content: t("question1.content"),
    },
    {
      id: 2,
      title: t("question2.title"),
      content: t("question2.content"),
    },
    {
      id: 3,
      title: t("question2.title"),
      content: t("question2.content"),
    },
    {
      id: 4,
      title: t("question4.title"),
      content: t("question4.content"),
    },
    {
      id: 5,
      title: t("question5.title"),
      content: t("question5.content"),
    },
    {
      id: 6,
      title: t("question6.title"),
      content: t("question6.content"),
    },
    {
      id: 7,
      title: t("question7.title"),
      content: t("question7.content"),
    },
    {
      id: 8,
      title: t("question8.title"),
      content: t("question8.content"),
    },
    {
      id: 9,
      title: t("question9.title"),
      content: t("question9.content"),
    },
    {
      id: 10,
      title: t("question10.title"),
      content: t("question10.content"),
    },
  ];
};
