import { useContext, useState, useEffect } from "react";
import { faq_cover, faq_icon } from "../../assets/images/images";
import { Faqcard } from "../../components/faqcard/Faqcard";
import { useFaqs } from "../../tdata/faqs";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useTranslation } from "react-i18next";
import { isValidLang } from "../../utils/utilsFunctions";
import styles from "./faq.module.scss";

type FaqObject = {
  id: number;
  title: string;
  content: string;
};

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang: urlLang } = useParams();
  const globalContext = useContext(GlobalContext);
  const { t } = useTranslation<string>("faq");
  const faqs = useFaqs();

  useEffect(() => {
    if (urlLang && isValidLang(urlLang)) {
      globalContext.setLang(urlLang);
    } else if (globalContext.lang) {
      globalContext.setLang(globalContext.lang);
    } else {
      globalContext.setLang("en");
    }
  }, [urlLang]);
  function divideArrayIntoTwo(arr: FaqObject[]) {
    const midIndex = Math.ceil(arr.length / 2);
    const firstFaqs = arr.slice(0, midIndex);
    const secondFaqs = arr.slice(midIndex);

    return [firstFaqs, secondFaqs];
  }
  const [firstFaqs, secondFaqs] = divideArrayIntoTwo(faqs);

  const handleFaqClick = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  return (
    <div className={styles.faq_container}>
      <div
        className={styles.cover}
        style={{ backgroundImage: `url(${faq_cover})` }}
      >
        <div className={styles.header_container}>
          <div className={styles.header_image_container}>
            <img className={styles.header_img} src={faq_icon} alt="QA icon" />
          </div>
          <h1 className={styles.header}>{t("header")}</h1>
        </div>
        <p className={styles.header_subtext}>{t("subHeader")}</p>
      </div>
      <div className={styles.faqs_container}>
        <div className={styles.faq_sub_container}>
          {firstFaqs.map((faq) => (
            <Faqcard
              key={faq.id}
              id={faq.id}
              title={faq.title}
              content={faq.content}
              onClick={handleFaqClick}
              isOpen={openFaq === faq.id}
            />
          ))}
        </div>
        <div className={styles.faq_sub_container}>
          {secondFaqs.map((faq) => (
            <Faqcard
              key={faq.id}
              id={faq.id}
              title={faq.title}
              content={faq.content}
              onClick={handleFaqClick}
              isOpen={openFaq === faq.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
