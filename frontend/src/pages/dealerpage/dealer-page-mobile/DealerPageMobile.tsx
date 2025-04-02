import { ContactFormMap } from "../../../components/contact-form-map/ContactFormMap";
import { DealerInfo } from "../../../components/dealer-infomation/DealerInfo";
import { FilterItemsContainer } from "../../../components/filter-item-container/FilterItemsContainer";
import { IDealerPageProps } from "../../../types/otherTypes";
import styles from "./dealer-page-mobile.module.scss";

export const DealerPageMobile = ({
  dealerNameAndTotal,
  dealer,
  carList,
  isLoading,
  loadingContainer,
}: IDealerPageProps) => {
  return (
    <div className={styles.dealer_page_mobile_container}>
      <div className={styles.dealer_page_header}>{dealerNameAndTotal}</div>
      <FilterItemsContainer />
      <div className={styles.car_card_container_wrapper}>
        {isLoading ? loadingContainer : carList}
      </div>
      <div className={styles.address_contaact_container}>
        <ContactFormMap />
      </div>
      <DealerInfo dealer={dealer} />
    </div>
  );
};
