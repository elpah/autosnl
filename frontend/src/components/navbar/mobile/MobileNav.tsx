// import React from "react";
// import hamburger from "../../../assets/images/nav_images/hamburger.png";
// import close from "../../../assets/images/nav_images/close.png";
// import arrow from "../../../assets/images/nav_images/arrow.png";
// import language_image from "../../../assets/images/nav_images/language_image.png";
// import search_icon from "../../../assets/images/nav_images/search_icon.png";



// import styles from "./mobile-nav.module.scss";

// export const MobileNav = () => {
//   return (
//     <header>
//       <nav>
//         <div className={styles.logo_container}>
//           <h2 className={styles.logo_header}>ZaurAutos</h2>
//         </div>
//         <div className={styles.others_item_container}>
//           <div className={styles.search_container}>
//             <img className={styles.search_icon} src={search_icon} alt="search icon" />
//           </div>
//           <div className={styles.language_selector}>
//             <div className={styles.language_image_container}>
//               <img className={styles.current_language} src={language_image} alt="language image" />
//             </div>
//             <div className={styles.language_arrow_container}>
//               <img className={styles.arrow} src={arrow} alt="arrow" />
//             </div>
//           </div>
//           <div className={styles.menu_icon}>
//             <img className={styles.icon} src={hamburger} alt="hamburger icon" />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

import React, { useState } from "react";
import hamburger from "../../../assets/images/nav_images/hamburger.png";
import close from "../../../assets/images/nav_images/close.png";
import arrow from "../../../assets/images/nav_images/arrow.png";
import language_image from "../../../assets/images/nav_images/language_image.png";
import search_icon from "../../../assets/images/nav_images/search_icon.png";
import styles from "./mobile-nav.module.scss";

export const MobileNav = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <header>
      <nav>
        <div className={styles.logo_container}>
          <h2 className={styles.logo_header}>ZaurAutos</h2>
        </div>
        <div className={styles.others_item_container}>
          {searchVisible ? (
            <div className={styles.search_bar}>
              <input
                type="text"
                className={styles.search_input}
                placeholder="Search..."
              />
              <button className={styles.close_button} onClick={toggleSearch}>
                <img className={styles.hide_search} src={close} alt="close icon" />
              </button>
            </div>
          ) : (
            <>
              <div className={styles.search_container} onClick={toggleSearch}>
                <img className={styles.search_icon} src={search_icon} alt="search icon" />
              </div>
              <div className={styles.language_selector}>
                <div className={styles.language_image_container}>
                  <img className={styles.current_language} src={language_image} alt="language image" />
                </div>
                <div className={styles.language_arrow_container}>
                  <img className={styles.arrow} src={arrow} alt="arrow" />
                </div>
              </div>
              <div className={styles.menu_icon}>
                <img className={styles.icon} src={hamburger} alt="hamburger icon" />
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
