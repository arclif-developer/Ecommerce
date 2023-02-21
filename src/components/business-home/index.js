/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function BusinessHomeMain() {
  const [section, setSection] = useState("profile");
  const imgurl = "#";
  return (
    <>
      <div className={styles.secOne}>
        <div className={styles.secOneInner}>
          {Array.apply(null, { length: 15 }).map((e, i) => (
            <div className={styles.bidInner}>
              <img
                className={styles.product}
                src="/img/common/ni.jpg"
                onError={(e) => (e.target.src = "/img/common/ina.png")}
                alt="Product Image"
              />
              <div className={styles.Desc}>Monte Contemporary Dining Chair Wi...</div>
              <div className={styles.Locatn}>Malappuram, Tirur</div>
              <div className={styles.Buttn}>Furniture</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
