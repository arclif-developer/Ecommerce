/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import React, { useContext } from "react";
import styles from "./askProduct-popup.module.css";

const AskProductPopUp = () => {
  const [Store] = useContext(StoreContext);
  const setAskProductPopup = Store.setAskProductPopup;

  return (
    <div className={styles.askPopup_outer}>
      <div className={styles.askpopup_inner}>
        <div className={styles.askpopup_inner_inner}>
          <div className={styles.askpopup_header}>
            <p>Ask your products</p>
            <img src="/img/common/closePopup.svg" alt="" onClick={() => setAskProductPopup(false)} />
          </div>
          <div className={styles.askpopup_content}>
            <p>What is your product?</p>
            <input type="text" placeholder="Product name" />
            <p>Select product category</p>
            <div className={styles.askpopup_content_row}>
              <select>
                <option value="">Test</option>
                <option value="">Test</option>
                <option value="">Test</option>
                <option value="">Test</option>
              </select>
              <div className={styles.uploadPhoto_button}>
                <img src="/icon/camera.svg" alt="" />
                Take or upload a photo
              </div>
            </div>
            <p>Choose your location</p>
            <div className={styles.selectContainer_row}>
              <select>
                <option value="">Test</option>
                <option value="">Test</option>
                <option value="">Test</option>
                <option value="">Test</option>
              </select>
              <select>
                <option value="">Test</option>
                <option value="">Test</option>
                <option value="">Test</option>
                <option value="">Test</option>
              </select>
            </div>
            <p>Description</p>
            <input type="text" placeholder="Add more details" />
            <div className={styles.sendRequirement_button}>Send my requirment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskProductPopUp;
