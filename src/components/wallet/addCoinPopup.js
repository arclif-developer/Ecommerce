/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";

import styles from "./addCoinPopup.module.css";

const AddCoinPopup = () => {
  const [Store] = useContext(StoreContext);
  const setAddCoinPopup = Store.setAddCoinPopup;
  const coinRatio = Store.coinRatio;

  // console.log(coinRatio);

  const [coinCount, setCoinCount] = useState("");
  const handleChangeInput = (e) => {
    if (e.target.value !== "") {
      if (e.target.value > 0) {
        setCoinCount(parseInt(e.target.value));
      } else {
        setCoinCount(parseInt(1));
      }
    } else {
      setCoinCount(parseInt(1));
    }
  };

  return (
    <div className={styles.redeemPopup_outer}>
      <div className={styles.redeemPopup_close} onClick={() => setAddCoinPopup(false)}></div>
      <div className={styles.redeemPopup_inner}>
        <div className={styles.redeemPopup_inner_inner}>
          <div className={styles.redeemPopup_header}>
            <h4>Add Coin to your account</h4>
            <img src="/icon/closePopup.svg" alt="" onClick={() => setAddCoinPopup(false)} />
          </div>
          <div className={styles.redeemContent_container}>
            <div className={styles.input_label}>
              <label htmlFor="coinInput">Required Number of coin:</label>
            </div>
            <div className={styles.input_coin}>
              <input
                id="coinInput"
                type="number"
                placeholder="Count"
                min="1"
                defaultValue={coinCount}
                onChange={handleChangeInput}
              />
            </div>
            <div className={styles.amount}>
              <span> Amount : </span>
              <span>
                Rs<span>{coinRatio * coinCount}</span>/-
              </span>
            </div>
            <div className={styles.paynow}>Pay now</div>
            <div className={styles.payment_with}>
              <span>Secure payment with</span>
              <img src="img/wallet/Razorpay_logo.svg" alt="Razorpay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoinPopup;
