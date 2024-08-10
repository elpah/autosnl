import React from "react";
import style from "./faqcard.module.scss";

type FaqCard = {
  id: number;
  title: string;
  content: string;
  onClick: (id: number) => void;
  isOpen: boolean;
};
export const Faqcard = ({ title, content, id, onClick, isOpen }: FaqCard) => {
  return (
    <div className={style.faqcard_container}>
      <div className={style.title_container} onClick={() => onClick(id)}>
        <div className={style.blue_bar}></div>
        <div className={style.title}>{title}</div>
      </div>
      <div
        className={`${style.content_container} ${
          isOpen ? style.content_open : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
};
