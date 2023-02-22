/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function OrderListMain() {
  const [section, setSection] = useState("Overview");
  return (
    <>
      <div className={styles.secOne}>
        <h1>Order list</h1>
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
                  The Sleep Company Smart GRID Stylus High-Back Chair for Office & Overparented Smart GRID Technology
                  Nylon Office Executive Chair.
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
      </div>
      <div className={styles.secTwo}>
        <div className={styles.One}>
          <h3>More details</h3>
          <div className={styles.section_buttons}>
            <div onClick={() => setSection("Overview")} className={section === "Overview" ? styles.active : ""}>
              Overview
            </div>
            <div onClick={() => setSection("Details")} className={section === "Details" ? styles.active : ""}>
              Details
            </div>
            <div onClick={() => setSection("Merchant")} className={section === "Merchant" ? styles.active : ""}>
              Merchant Info
            </div>
            <div onClick={() => setSection("Returns")} className={section === "Returns" ? styles.active : ""}>
              Returns & Cancellations
            </div>
          </div>

          <div className={styles.section_outer}>
            {section === "Overview" ? (
              <>
                <div>
                  Whether you need a chair for your gaming station or your study spot, a gaming chair is a fantastic
                  choice. Ergonomic and comfortable, our gaming chairs come in different styles too.Your gaming desk is
                  somewhere you will spend long hours, so it’s important to get the comfort, ergonomics and
                  functionality you need. And of course, the right extras can also help make things more enjoyable.
                </div>
              </>
            ) : section === "Details" ? (
              <>
                <div>
                  Details Whether you need a chair for your gaming station or your study spot, a gaming chair is a
                  fantastic choice. Ergonomic and comfortable, our gaming chairs come in different styles too.Your
                  gaming desk is somewhere you will spend long hours, so it’s important to get the comfort, ergonomics
                  and functionality you need. And of course, the right extras can also help make things more enjoyable.
                </div>
              </>
            ) : section === "Merchant" ? (
              <>
                <div>
                  Merchant Whether you need a chair for your gaming station or your study spot, a gaming chair is a
                  fantastic choice. Ergonomic and comfortable, our gaming chairs come in different styles too.Your
                  gaming desk is somewhere you will spend long hours, so it’s important to get the comfort, ergonomics
                  and functionality you need. And of course, the right extras can also help make things more enjoyable.
                </div>
              </>
            ) : section === "Returns" ? (
              <>
                <div>
                  Returns Whether you need a chair for your gaming station or your study spot, a gaming chair is a
                  fantastic choice. Ergonomic and comfortable, our gaming chairs come in different styles too.Your
                  gaming desk is somewhere you will spend long hours, so it’s important to get the comfort, ergonomics
                  and functionality you need. And of course, the right extras can also help make things more enjoyable.
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
