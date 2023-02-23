/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import OrderListMoreMain from "./orderMore";

import styles from "./index.module.css";

export default function OrderListMain() {
  return (
    <>
      <div className={styles.secOne}>
        <h1>Order list</h1>
        {Array.apply(null, { length: 3 }).map((e, i) => (
          <div className={styles.order_all_outer}>
            <h2>Product Name</h2>
            <div className={styles.secOneInner}>
              <div className={styles.Main_con}>
                <div className={styles.One}>
                  <img
                    className={styles.product}
                    src="/img/common/ni.svg"
                    onError={(e) => (e.target.src = "/img/common/ina.svg")}
                    alt="Product Image"
                  />
                </div>
                <div className={styles.Two}>
                  <div className={styles.TwoOne}>
                    <h4>₹349</h4>
                    <p>
                      The Sleep Company Smart GRID Stylus High-Back Chair for Office & Overparented Smart GRID
                      Technology Nylon Office Executive Chair.
                    </p>
                  </div>
                  <div className={styles.TwoTwo}>
                    <div className={styles.TwoTwoOne}>
                      <img src="/icon/address.png" alt="Address" />
                      <span>Delivery address:</span>
                    </div>
                    <div className={styles.TwoTwoTwo}>
                      <p>686 Great South Road, Manukau, Saules ilea 7 - 16, Cosi</p>
                      <p>Mobile Number: +91 2543 211 212</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.Line}></div>
              <div className={styles.Three}>
                <a className={styles.accept}>Order Accept</a>
                <a className={styles.issue}>
                  <img src="/icon/issue.png" alt="Address" />
                  <span>Report issue</span>
                </a>
              </div>
            </div>
            <OrderListMoreMain />
          </div>
        ))}
      </div>
    </>
  );
}
