/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function OrderListMain() {
  const [section, setSection] = useState("Overview");
  const [orderList, setOrderList] = useState([]);
  async function GetSellerPlacedOrderList() {
    const resp = await fetch("https://agriha-backend.onrender.com/order/seller/order_placed_list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGI2YzNhM2U5OTk2ZWViNjBkNjg1MiIsImlhdCI6MTY3NzA0ODU2MSwiZXhwIjoxNjc5NTU0MTYxfQ.BN72_j8Yux8DdRkMd7v7vJzSGT1U_AdSG6qIhW9eVL0"}`,
      },
    });
    const data = await resp.json();
    if (data.status === 200) {
      setOrderList(data.orderList);
    }
  }
  useEffect(() => {
    GetSellerPlacedOrderList();
  }, []);

  async function AcceptOrder(id) {
    const resp = await fetch(`https://agriha-backend.onrender.com/order/order_confirmed`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGI2YzNhM2U5OTk2ZWViNjBkNjg1MiIsImlhdCI6MTY3NzA0ODU2MSwiZXhwIjoxNjc5NTU0MTYxfQ.BN72_j8Yux8DdRkMd7v7vJzSGT1U_AdSG6qIhW9eVL0"}`,
      },
      body: JSON.stringify({
        products_id: id,
      }),
    });
    const data = await resp.json();
    if (data.status === 200) {
      GetSellerPlacedOrderList();
    }
  }

  const handleAcceptOrder = (id) => {
    AcceptOrder(id);
  };

  return (
    <>
      {orderList.length > 0 ? (
        <>
          {orderList.map((items, index) => {
            return (
              <>
                {items.products.map((products, index) => {
                  return (
                    <>
                      <>
                        <div className={styles.secOne}>
                          <h1></h1>
                          <div className={styles.secOneInner}>
                            <div className={styles.Main_con}>
                              <div className={styles.One}>
                                <img
                                  className={styles.product}
                                  src={
                                    products?.productId?.thumbnail
                                      ? products?.productId?.thumbnail
                                      : "/img/common/ni.jpg"
                                  }
                                  onError={(e) => (e.target.src = "/img/common/ina.png")}
                                  alt="Product Image"
                                />
                              </div>
                              <div className={styles.Two}>
                                <div className={styles.TwoOne}>
                                  <h4>₹{products?.productId?.mrp}</h4>
                                  <p>{products?.productId?.name}</p>
                                </div>
                                <div className={styles.TwoTwo}>
                                  <div className={styles.TwoTwoOne}>
                                    <img src="/img/orderlist/address.png" alt="Address" />
                                    <span>Delivery address:</span>
                                  </div>
                                  <div className={styles.TwoTwoTwo}>
                                    <p>
                                      {items.address_id?.address}, {items.address_id?.city}, {items.address_id?.state},{" "}
                                      {items.address_id?.pincode}
                                    </p>
                                    {items.address_id?.phone ? <p>Mobile Number: +{items.address_id?.phone}</p> : ""}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.Line}></div>
                            <div className={styles.Three}>
                              {products.confirm === false ? (
                                <>
                                  <a className={styles.accept} onClick={() => handleAcceptOrder(products._id)}>
                                    Order Accept
                                  </a>
                                </>
                              ) : (
                                <a className={styles.accepted}>Order Accepted</a>
                              )}

                              <a className={styles.issue}>
                                <img src="/img/orderlist/issue.png" alt="Address" />
                                <span>Report issue</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={styles.secTwo}>
                          <div className={styles.One}>
                            <h3>More details</h3>
                            <div className={styles.section_buttons}>
                              <div
                                onClick={() => setSection(`Overview${index}`)}
                                className={section === `Overview${index}` ? styles.active : ""}
                              >
                                Overview
                              </div>
                              <div
                                onClick={() => setSection(`Details${index}`)}
                                className={section === `Details${index}` ? styles.active : ""}
                              >
                                Details
                              </div>
                              <div
                                onClick={() => setSection(`Merchant${index}`)}
                                className={section === `Merchant${index}` ? styles.active : ""}
                              >
                                Merchant Info
                              </div>
                              <div
                                onClick={() => setSection(`Returns${index}`)}
                                className={section === `Returns${index}` ? styles.active : ""}
                              >
                                Returns & Cancellations
                              </div>
                            </div>

                            <div className={styles.section_outer}>
                              {section === `Overview${index}` ? (
                                <>
                                  <div>{products?.productId?.description}</div>
                                </>
                              ) : section === `Details${index}` ? (
                                <>
                                  <div>
                                    Details Whether you need a chair for your gaming station or your study spot, a
                                    gaming chair is a fantastic choice. Ergonomic and comfortable, our gaming chairs
                                    come in different styles too.Your gaming desk is somewhere you will spend long
                                    hours, so it’s important to get the comfort, ergonomics and functionality you need.
                                    And of course, the right extras can also help make things more enjoyable.
                                  </div>
                                </>
                              ) : section === `Merchant${index}` ? (
                                <>
                                  <div>
                                    Merchant Whether you need a chair for your gaming station or your study spot, a
                                    gaming chair is a fantastic choice. Ergonomic and comfortable, our gaming chairs
                                    come in different styles too.Your gaming desk is somewhere you will spend long
                                    hours, so it’s important to get the comfort, ergonomics and functionality you need.
                                    And of course, the right extras can also help make things more enjoyable.
                                  </div>
                                </>
                              ) : section === `Returns${index}` ? (
                                <>
                                  <div>
                                    Returns Whether you need a chair for your gaming station or your study spot, a
                                    gaming chair is a fantastic choice. Ergonomic and comfortable, our gaming chairs
                                    come in different styles too.Your gaming desk is somewhere you will spend long
                                    hours, so it’s important to get the comfort, ergonomics and functionality you need.
                                    And of course, the right extras can also help make things more enjoyable.
                                  </div>
                                </>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    </>
                  );
                })}
              </>
            );
          })}
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/014/814/239/small/no-order-a-flat-rounded-icon-is-up-for-premium-use-vector.jpg"
            alt="No order"
          />
        </div>
      )}
    </>
  );
}
