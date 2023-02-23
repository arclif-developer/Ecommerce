/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function OrderListMoreMain() {
  const [section, setSection] = useState("Overview");
  return (
    <>
      <div className={styles.SnOne}>
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
                somewhere you will spend long hours, so it’s important to get the comfort, ergonomics and functionality
                you need. And of course, the right extras can also help make things more enjoyable.
              </div>
            </>
          ) : section === "Details" ? (
            <>
              <div>
                Details Whether you need a chair for your gaming station or your study spot, a gaming chair is a
                fantastic choice. Ergonomic and comfortable, our gaming chairs come in different styles too.Your gaming
                desk is somewhere you will spend long hours, so it’s important to get the comfort, ergonomics and
                functionality you need. And of course, the right extras can also help make things more enjoyable.
              </div>
            </>
          ) : section === "Merchant" ? (
            <>
              <div>
                Merchant Whether you need a chair for your gaming station or your study spot, a gaming chair is a
                fantastic choice. Ergonomic and comfortable, our gaming chairs come in different styles too.Your gaming
                desk is somewhere you will spend long hours, so it’s important to get the comfort, ergonomics and
                functionality you need. And of course, the right extras can also help make things more enjoyable.
              </div>
            </>
          ) : section === "Returns" ? (
            <>
              <div>
                Returns Whether you need a chair for your gaming station or your study spot, a gaming chair is a
                fantastic choice. Ergonomic and comfortable, our gaming chairs come in different styles too.Your gaming
                desk is somewhere you will spend long hours, so it’s important to get the comfort, ergonomics and
                functionality you need. And of course, the right extras can also help make things more enjoyable.
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
