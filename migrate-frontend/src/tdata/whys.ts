import { useTranslation } from "react-i18next";
import {
  quality_assurance,
  useful_suggest,
  best_rate,
  variety_options,
  great_offers,
  match_requirement,
} from "../assets/images/images";

export const useWhys = () => {
  const { t } = useTranslation("whys");

  return [
    {
      title: t("qualityAssurance.title"),
      paragraph: t("qualityAssurance.paragraph"),
      image: `${quality_assurance}`,
    },
    {
      title: t("matchRequirement.title"),
      paragraph: t("matchRequirement.paragraph"),
      image: `${match_requirement}`,
    },
    {
      title: t("varietyOptions.title"),
      paragraph: t("varietyOptions.paragraph"),
      image: `${variety_options}`,
    },
    {
      title: t("usefulSuggestions.title"),
      paragraph: t("usefulSuggestions.paragraph"),
      image: `${useful_suggest}`,
    },
    {
      title: t("bestRate.title"),
      paragraph: t("bestRate.paragraph"),
      image: `${best_rate}`,
    },
    {
      title: t("greatOffers.title"),
      paragraph: t("greatOffers.paragraph"),
      image: `${great_offers}`,
    },
  ];
};
