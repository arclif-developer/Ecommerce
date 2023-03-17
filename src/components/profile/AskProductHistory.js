/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./AskProductHistory.module.css";

const AskProductHistory = () => {
  return (
    <>
      <div className={styles.myOrder_right_productsContainer}>
        {Array.apply(null, { length: 5 }).map((e, i) => (
          <div className={styles.myOrder_right_productCard} key={i}>
            <img
              src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "
              alt="product Image"
            />
            <div className={styles.myOrder_right_productCard_details}>
              <div className={styles.myOrder_right_productCard_left}>
                <p>The Sleep Company SmartGRID High-Back ...</p>
                <span>Order date : 20-10-2023</span>
                <div className={styles.priceContainer}>
                  <h5>₹349</h5>
                  <p>₹1,499</p>
                  <span>76% off</span>
                </div>
              </div>
              <div className={styles.myOrder_right_productCard_right}>
                <span>
                  <img src="/img/profile/greenTick.svg" alt="Green Tick" />
                  Delivered on Oct 07, 2022
                </span>
                <p>Your item has been delivered</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AskProductHistory;
