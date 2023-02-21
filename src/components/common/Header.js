/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [Store] = useContext(StoreContext);
  const setAskProductPopup = Store.setAskProductPopup;

  const router = useRouter();

  const gotoProfile = () => {
    router.push("/profile");
  };

  const gotoCart = () => {
    router.push("/cart");
  };

  return (
    <>
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
              <span className={styles.favorites}>
                <img className={styles.nh} src="/icon/favorites-nh.svg" alt="" />
                <img className={styles.h} src="/icon/favorites-h.svg" alt="" />
              </span>
              <span className={styles.delete} onClick={gotoCart}>
                <img className={styles.nh} src="/icon/delete-nh.svg" alt="" />
                <img className={styles.h} src="/icon/delete-h.svg" alt="" />
              </span>
              <span className={styles.user} onClick={gotoProfile}>
                <img className={styles.nh} src="/icon/user-nh.svg" alt="" />
                <img className={styles.h} src="/icon/user-h.svg" alt="" />
              </span>
            </div>
            <div className={styles.askProducts_button} onClick={() => setAskProductPopup(true)}>
              Ask products
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile_search}>
        <div className={styles.header_search}>
          <input placeholder="What are you looking for?" />
          <img src="/icon/search.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
