import React from "react";

import { DealerPageMobile } from "./dealer-page-mobile/DealerPageMobile";

import styles from "./dealer-page.module.scss";
import { DealerPageDesktop } from "./dealer-page-desktop/DealerPageDesktop";

const DealerPage = () => {
  return (
    <div className={styles.dealer_page_container}>
      <DealerPageMobile />
      <DealerPageDesktop />
    </div>
  );
};

export default DealerPage;
