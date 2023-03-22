/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import OrderListMoreMain from "./orderMore";

import styles from "./index.module.css";
import { images } from "@/next.config";

import backend from "@/global/backend";

export default function OrderListMain() {
  const [placedOrders, setPlacedOrders] = useState([]);
  const [confirmId, setConfirmId] = useState([]);

  async function getSellerPlacedOrder() {
    var token = localStorage.getItem("token");
    const ApiResponse = await fetch(`${backend}/order/seller/order_placed_list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    const resp = await ApiResponse.json();
    if (resp.status === 200) {
      setPlacedOrders(resp.orderList);
    }
  }

  async function OrderAcceptFn(id) {
    var token = localStorage.getItem("token");
    const ApiResponse = await fetch(`${backend}/order/order_confirmed`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        products_id: id,
      }),
    });
    const resp = await ApiResponse.json();
    if (resp.status === 200) {
      setConfirmId([...confirmId, id]);
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

  return (
    <>
      {placedOrders.length > 0 ? (
        <>
          {placedOrders.map((items, index) => {
            return (
              <React.Fragment key={index}>
                <div className={styles.secOne}>
                  <h1>Order no: {index + 1}</h1>
                  <div className={styles.order_all_outer}>
                    <h2>product no: {index + 1}</h2>
                    <div className={styles.secOneInner}>
                      <div className={styles.Main_con}>
                        <div className={styles.One}>
                          <img
                            className={styles.product}
                            src={items?.productId?.thumbnail}
                            onError={(e) => (e.target.src = "/img/common/ina.svg")}
                            alt="Product Image"
                          />
                        </div>
                        <div className={styles.Two}>
                          <div className={styles.TwoOne}>
                            <h4>₹ {items?.productId?.mrp}</h4>
                            <p>{items?.productId?.name}</p>
                          </div>
                          <div className={styles.TwoTwo}>
                            <div className={styles.TwoTwoOne}>
                              <img src="/icon/address-h.png" alt="Address" />
                              <span>Delivery address:</span>
                            </div>
                            <div className={styles.TwoTwoTwo}>
                              <p>
                                {items?.address?.address}, {items?.address?.city}, {items?.address?.state},{" "}
                                {items?.address?.pincode}
                              </p>
                              {items?.address_id?.phone ? <p>Mobile Number: +91 {items?.address_id?.phone}</p> : ""}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.Line}></div>
                      <div className={styles.Three}>
                        {items.confirm === true || confirmId.includes(items?._id) ? (
                          <a className={styles.accepted}>Order Accepted</a>
                        ) : (
                          <a className={styles.accept} onClick={() => handleOrderAccept(items?._id)}>
                            Order Accept
                          </a>
                        )}
                        <a className={styles.issue}>
                          <img src="/icon/issue.png" alt="Address" />
                          <span>Report issue</span>
                        </a>
                      </div>
                    </div>
                    <OrderListMoreMain desc={items?.productId?.description} />
                  </div>
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
