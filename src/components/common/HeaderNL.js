/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";
import Link from "next/link";

import styles from "./Header.module.css";

const HeaderNotLogged = () => {
  const [Store] = useContext(StoreContext);
  const setUserRole = Store.setUserRole;

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
            <div onClick={() => (setUserRole("general"), router.push(`/login`))} className={styles.general_login}>
              General Login
            </div>
            <div onClick={() => (setUserRole("business"), router.push(`/login`))} className={styles.business_login}>
              Business Login
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

export default HeaderNotLogged;
