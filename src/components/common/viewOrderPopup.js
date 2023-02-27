/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import React, { useContext } from "react";
import styles from "./viewOrderPopup.module.css";

const ViewOrderPopUp = () => {
  const [Store] = useContext(StoreContext);
  const setViewOrderPopup = Store.setViewOrderPopup;

  return (
    <div className={styles.viewOrderPopup_outer}>
      <div onClick={() => setViewOrderPopup(false)} className={styles.viewOrderPopup_close}></div>
      <div className={styles.viewOrderPopup_inner}>
        <div className={styles.closeBtn}>
          <img onClick={() => setViewOrderPopup(false)} src="/img/common/closePopup.svg" alt="Close" />
        </div>
        <div className={styles.leftSide}>
          <img
            className={styles.product}
            src="/img/common/ni.svg"
            onError={(e) => (e.target.src = "/img/common/ina.svg")}
            alt="Product Image"
          />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.sideImage}>
            <img
              className={styles.sideImageProduct}
              src="/img/common/ni.svg"
              onError={(e) => (e.target.src = "/img/common/ina.svg")}
              alt="Product Image"
            />
            <img
              className={styles.sideImageProduct}
              src="/img/common/ni.svg"
              onError={(e) => (e.target.src = "/img/common/ina.svg")}
              alt="Product Image"
            />
            <img
              className={styles.sideImageProduct}
              src="/img/common/ni.svg"
              onError={(e) => (e.target.src = "/img/common/ina.svg")}
              alt="Product Image"
            />
            <img
              className={styles.sideImageProduct}
              src="/img/common/ni.svg"
              onError={(e) => (e.target.src = "/img/common/ina.svg")}
              alt="Product Image"
            />
          </div>
          <div className={styles.Descp}>
            The Sleep Company Smart GRID Stylus High-Back Chair for Office & Overparented.
          </div>
          <div className={styles.location}>
            <img src="/icon/address-h.png" alt="Address" />
            <span>Malappuram, Tirur</span>
          </div>
          <div className={styles.btns}>
            <div className={styles.accept}>Order Accept</div>
            <div className={styles.contact}>Contact now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderPopUp;
