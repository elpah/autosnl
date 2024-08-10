import React, { useState } from "react";
import faqicon from "../../assets/images/faq_images/faqicon.png";

import styles from "./faq.module.scss";
import { Faqcard } from "../../components/faqcard/Faqcard";

type FaqObject = {
  id: number;
  title: string;
  content: string;
};

export const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    {
      id: 1,
      title: "Is the prices of the cars Negotiable? ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui faucibus id.",
    },
    {
      id: 2,
      title: "Is the prices of the cars Negotiable? ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui faucibus id.",
    },
    {
      id: 3,
      title: "Is the prices of the cars Negotiable? ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui faucibus id.",
    },
    {
      id: 4,
      title: "Is the prices of the cars Negotiable? ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui faucibus id.",
    },
    {
      id: 5,
      title: "Is the prices of the cars Negotiable? ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui faucibus id.",
    },
    {
      id: 5,
      title: "Is the prices of the cars Negotiable? ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui faucibus id.",
    },
    {
      id: 6,
      title: "Is the prices of the cars Negotiable? ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui faucibus id.",
    },
    {
      id: 7,
      title: "Is the prices of the cars Negotiable? ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui faucibus id.",
    },
    {
      id: 8,
      title: "Is the prices of the cars Negotiable? ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui faucibus id.",
    },
    {
      id: 9,
      title: "Is the prices of the cars Negotiable? ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui faucibus id.",
    },
  ];

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
      <div className={styles.cover}>
        <div className={styles.header_container}>
          <div className={styles.header_image_container}>
            <img className={styles.header_img} src={faqicon} alt="QA icon" />
          </div>
          <div className={styles.header}>FAQ</div>
        </div>
        <div className={styles.header_subtext}>General Questions</div>
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
