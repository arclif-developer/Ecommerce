/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import React, { useContext } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [Store] = useContext(StoreContext);
  const setAskProductPopup = Store.setAskProductPopup;

  return (
    <div className={styles.header_outer}>
      <div className={styles.header_inner}>
        <div className={styles.header_left}>
          <img src="/img/common/logo.svg" alt="LOGO" />
        </div>
        <div className={styles.header_center}>
          <div className={styles.header_search}>
            <input placeholder="What are you looking for?" />
            <img src="/icon/search.svg" alt="" />
          </div>
        </div>
        <div className={styles.header_right}>
          <div className={styles.header_right_icons}>
            <img src="/icon/favorites.svg" alt="" />
            <img src="/icon/delete.svg" alt="" className={styles.deleteIcon} />
            <img src="/icon/user.svg" alt="" />
          </div>
          <div className={styles.askProducts_button} onClick={() => setAskProductPopup(true)}>
            Ask products
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
