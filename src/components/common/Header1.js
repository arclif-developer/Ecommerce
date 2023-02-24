/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";
import Link from "next/link";

import styles from "./Header.module.css";

const HeaderOne = () => {
  const [Store] = useContext(StoreContext);
  // const setSellProductPopup = Store.setSellProductPopup;

  const router = useRouter();
  return (
    <>
      <div className={styles.header_outer}>
        <div className={styles.header_inner}>
          <div className={styles.header_left}>
            <Link href="/">
              <img src="/img/common/logo.svg" alt="LOGO" />
            </Link>
          </div>
          <div className={styles.header_center}>
            <div className={styles.header_search}>
              <input placeholder="What are you looking for?" />
              <img src="/icon/search.svg" alt="" />
            </div>
          </div>
          <div className={styles.header_right}>
            <div className={styles.header_right_icons}>
              <Link href="/business-home">
                <span className={`${styles.favorites} ${router.pathname == "/business-home" ? styles.active : ""}`}>
                  <img className={styles.nh} src="/icon/bell-nh.svg" alt="" />
                  <img className={styles.h} src="/icon/bell-h.svg" alt="" />
                </span>
              </Link>
              <Link href="/order-list">
                <span className={`${styles.delete} ${router.pathname == "/order-list" ? styles.active : ""}`}>
                  <img className={styles.nh} src="/icon/orderlist-nh.svg" alt="" />
                  <img className={styles.h} src="/icon/orderlist-h.svg" alt="" />
                </span>
              </Link>
              <Link href="/business-account">
                <span className={`${styles.user} ${router.pathname == "/business-account" ? styles.active : ""}`}>
                  <img className={styles.nh} src="/icon/user-nh.svg" alt="" />
                  <img className={styles.h} src="/icon/user-h.svg" alt="" />
                </span>
              </Link>
            </div>
            <Link href="/add-product">
              <div className={styles.askProducts_button}>Sell produts</div>
            </Link>
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
