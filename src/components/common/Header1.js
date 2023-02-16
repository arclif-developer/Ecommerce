/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import React, { useContext } from "react";
import styles from "./Header.module.css";

const HeaderOne = () => {
  const [Store] = useContext(StoreContext);
  const setSellProductPopup = Store.setSellProductPopup;

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
                <img className={styles.nh} src="/icon/bell-nh.svg" alt="" />
                <img className={styles.h} src="/icon/bell-h.svg" alt="" />
              </span>
              <span className={styles.delete}>
                <img className={styles.nh} src="/icon/orderlist-nh.svg" alt="" />
                <img className={styles.h} src="/icon/orderlist-h.svg" alt="" />
              </span>
              <span className={styles.user}>
                <img className={styles.nh} src="/icon/user-nh.svg" alt="" />
                <img className={styles.h} src="/icon/user-h.svg" alt="" />
              </span>
            </div>
            <div className={styles.askProducts_button} onClick={() => setSellProductPopup(true)}>
              Sell produts
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

export default HeaderOne;
