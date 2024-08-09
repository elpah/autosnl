import React, { useState } from "react";
import style from "./faqcard.module.scss";

export const Faqcard = () => {
  const [openContent, setOpenContent] = useState(false);

  return (
    <div className={style.faqcard_container}>
      <div className={style.title_container} onClick={() => setOpenContent(!openContent)}>
        <div className={style.blue_bar}></div>
        <div className={style.title}>Buying cars from ZaurAutos</div>
      </div>
      <div
        className={`${style.content_container} ${openContent ? style.content_open : ""}`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
        nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo
        ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris
        placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at
        posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui
        faucibus id.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
        nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo
        ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris
        placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at
        posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui
        faucibus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
        nisl ut eros pulvinar tincidunt. Nulla facilisi. Sed eget arcu nec justo
        ultricies viverra. Proin non turpis non libero viverra feugiat. Mauris
        placerat, nisi ac fermentum aliquam, risus libero fermentum sapien, at
        posuere justo nisi et lacus. Fusce fermentum semper orci, ut tempus dui
        faucibus id.
      </div>
    </div>
  );
};
