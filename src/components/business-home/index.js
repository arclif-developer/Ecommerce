/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";

import styles from "./index.module.css";

export default function BusinessHomeMain() {
  const [Store] = useContext(StoreContext);
  const setViewOrderPopup = Store.setViewOrderPopup;
  return (
    <>
      <div className={styles.secOne}>
        <div className={styles.secOneInner}>
          <div className={styles.bidFilterOuter}>
            <span>Malappuram</span>
            <span>Kozhikode</span>
            <span>Kollam</span>
            <span>Kottayam</span>
            <span>Kannur</span>
            <span>Idukki</span>
            <span>Alappuzha</span>
            <span>Wayanad</span>
            <span>Palakkad</span>
            <span>Ernakulam</span>
            <span>Malappuram</span>
            <span>Kozhikode</span>
            <span>Kollam</span>
            <span>Kottayam</span>
            <span>Kannur</span>
            <span>Idukki</span>
            <span>Alappuzha</span>
            <span>Wayanad</span>
            <span>Palakkad</span>
            <span>Ernakulam</span>
          </div>
          <div className={styles.bidTitle}>All</div>
          <div className={styles.bidOuter}>
            {Array.apply(null, { length: 15 }).map((e, i) => (
              <div className={styles.bidInner} onClick={() => setViewOrderPopup(true)}>
                <img
                  className={styles.product}
                  src="/img/common/ni.svg"
                  onError={(e) => (e.target.src = "/img/common/ina.svg")}
                  alt="Product Image"
                />
                <div className={styles.Desc}>Monte Contemporary Dining Chair Wi...</div>
                <div className={styles.Locatn}>
                  <img src="/icon/address.png" alt="Address" />
                  <span>Malappuram, Tirur</span>
                </div>
                <div className={styles.Buttn}>Furniture</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
