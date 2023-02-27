/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import OrderListMoreMain from "./orderMore";

import styles from "./index.module.css";
import { images } from "@/next.config";
const Api_url = "https://agriha-backend.onrender.com";

export default function OrderListMain() {
  const [placedOrders, setPlacedOrders] = useState([]);
  var token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGI2YzNhM2U5OTk2ZWViNjBkNjg1MiIsImlhdCI6MTY3NzA0ODU2MSwiZXhwIjoxNjc5NTU0MTYxfQ.BN72_j8Yux8DdRkMd7v7vJzSGT1U_AdSG6qIhW9eVL0";
  async function getSellerPlacedOrder() {
    const ApiResponse = await fetch(`${Api_url}/order/seller/order_placed_list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resp = await ApiResponse.json();
    if (resp.status === 200) {
      setPlacedOrders(resp.orderList);
    }
  }

  async function OrderAcceptFn(id) {
    const ApiResponse = await fetch(`${Api_url}/order/order_confirmed`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        products_id: id,
      }),
    });
    const resp = await ApiResponse.json();
    console.log(resp);
    if (resp.status === 200) {
      getSellerPlacedOrder();
    }
  }

  const handleOrderAccept = (id) => {
    if (id) {
      OrderAcceptFn(id);
    }
  };

  useEffect(() => {
    getSellerPlacedOrder();
  }, []);
  console.log(placedOrders);
  return (
    <>
      {placedOrders.length > 0 ? (
        <>
          {placedOrders.map((items, index) => {
            return (
              <React.Fragment key={index}>
                <div className={styles.secOne}>
                  <h1>Order no: {index + 1}</h1>
                  {items.products.map((product, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className={styles.order_all_outer}>
                          <h2>product no: {index + 1}</h2>
                          <div className={styles.secOneInner}>
                            <div className={styles.Main_con}>
                              <div className={styles.One}>
                                <img
                                  className={styles.product}
                                  src={product?.productId?.thumbnail}
                                  onError={(e) => (e.target.src = "/img/common/ina.svg")}
                                  alt="Product Image"
                                />
                              </div>
                              <div className={styles.Two}>
                                <div className={styles.TwoOne}>
                                  <h4>₹ {product?.productId?.mrp}</h4>
                                  <p>{product?.productId?.name}</p>
                                </div>
                                <div className={styles.TwoTwo}>
                                  <div className={styles.TwoTwoOne}>
                                    <img src="/icon/address-h.png" alt="Address" />
                                    <span>Delivery address:</span>
                                  </div>
                                  <div className={styles.TwoTwoTwo}>
                                    <p>
                                      {items.address_id.address}, {items.address_id.city}, {items.address_id.state},{" "}
                                      {items.address_id.pincode}
                                    </p>
                                    {items.address_id.phone ? <p>Mobile Number: +91 {items.address_id.phone}</p> : ""}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.Line}></div>
                            <div className={styles.Three}>
                              {product.confirm === true ? (
                                <a className={styles.accepted}>Order Accepted</a>
                              ) : (
                                <a className={styles.accept} onClick={() => handleOrderAccept(product._id)}>
                                  Order Accept
                                </a>
                              )}

                              <a className={styles.issue}>
                                <img src="/icon/issue.png" alt="Address" />
                                <span>Report issue</span>
                              </a>
                            </div>
                          </div>
                          <OrderListMoreMain desc={product?.productId?.description} />
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/014/814/239/small/no-order-a-flat-rounded-icon-is-up-for-premium-use-vector.jpg"
            alt="no-order"
          />
        </div>
      )}
    </>
  );
}
