/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import backend from "@/global/backend";

import styles from "./AskProductHistory.module.css";

const AskProductHistory = () => {
  const [askHistory, setAskHistory] = useState([]);
  async function getAllAskHistoryFn() {
    let token = localStorage.getItem("token");
    const ApiResponse = await fetch(`${backend}/product/userReqProduct_histroy`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await ApiResponse.json();
    // console.log(data);
    if (data.status === 200) {
      setAskHistory(data?.data);
    }
  }
  useEffect(() => {
    getAllAskHistoryFn();
  }, []);

  return (
    <>
      <div className={styles.myOrder_right_productsContainer}>
        {askHistory?.length !== 0 ? (
          <>
            {askHistory?.map((item, index) => {
              console.log(item);
              return (
                <div className={styles.myOrder_right_productCard} key={index}>
                  <img
                    src={item.image ? item.image : "/img/common/ni.svg"}
                    onError={(e) => (e.target.src = "/img/common/ina.svg")}
                    alt="product Image"
                  />
                  <div className={styles.myOrder_right_productCard_details}>
                    <div className={styles.myOrder_right_productCard_left}>
                      <h3>{item.product_name}</h3>
                      <span>{item.product_category}</span>
                      <p>{item.description}</p>
                      <div className={styles.location}>
                        <img src="/icon/address-h.png" alt="Address" />
                        <span>
                          {item.district}, {item.panchayath}
                        </span>
                      </div>
                      {/* <div className={styles.priceContainer}>
                        <h5>₹349</h5>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className={styles.no_product_enquiry}>
            <img src="/img/business-home/no_product_enquiry.svg" alt="" />
          </div>
        )}
      </div>
    </>
  );
};

export default AskProductHistory;
