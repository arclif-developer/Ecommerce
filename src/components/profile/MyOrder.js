/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import styles from "./MyOrder.module.css";
import backend from "@/global/backend";
import { StoreContext } from "@/global/StoreContext";
import moment from "moment";

const MyOrder = () => {
  const [Store] = useContext(StoreContext);
  const setMyorders = Store.setMyorders;
  const myOrders = Store.myOrders;
  const filtermyOrders = Store.filtermyOrders;
  const setFiltermyOrders = Store.setFiltermyOrders;
  const filteredmyOrders = Store.filteredmyOrders;
  const setFilteredmyOrders = Store.setFilteredmyOrders;

  async function getMyOrders() {
    const token = localStorage.getItem("token");
    if (token) {
      const apiCall = await fetch(`${backend}/order/user_order_history`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await apiCall.json();
      setMyorders(res);
      console.log(res);
    }
  }

  const handleCheckBox = (event) => {
    if (event.target.checked) {
      setFiltermyOrders((values) => [...values, event.target.value]);
    } else {
      setFiltermyOrders((values) => values.filter((items) => items !== event.target.value));
    }
  };
  useEffect(() => {
    getMyOrders();
  }, []);

  useEffect(() => {
    if (filtermyOrders?.length > 0) {
      const filteredOrders = myOrders.filter((order) => {
        return order?.products.some((products) => filtermyOrders?.includes(products.delivery_status));
      });
      setFilteredmyOrders(filteredOrders);
    } else {
      setFilteredmyOrders(myOrders);
    }
  }, [filtermyOrders, myOrders]);

  return (
    <div className={styles.myOrder_outer}>
      <div className={styles.myOrder_inner}>
        <div className={styles.myOrder_left}>
          <div className={styles.myOrder_left_table}>
            <div className={styles.myOrder_left_table_row}>
              <div className={styles.myOrder_left_table_row_left}>
                <h4>Filter now</h4>
                <p>Order status on below</p>
              </div>
              <span onClick={() => setFiltermyOrders([])}>Clear all</span>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input
                id="onTheWay"
                type="checkbox"
                value="SHIPPED"
                checked={filtermyOrders?.includes("SHIPPED")}
                onChange={handleCheckBox}
              />
              <label htmlFor="onTheWay">On the way</label>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input
                id="Delivered"
                type="checkbox"
                value="DELIVERED"
                checked={filtermyOrders?.includes("DELIVERED")}
                onChange={handleCheckBox}
              />
              <label htmlFor="Delivered">Delivered</label>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input
                id="Cancelled"
                type="checkbox"
                value="CANCELED"
                checked={filtermyOrders?.includes("CANCELED")}
                onChange={handleCheckBox}
              />
              <label htmlFor="Cancelled">Cancelled</label>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input
                id="Returned"
                type="checkbox"
                value="RETURNED"
                checked={filtermyOrders?.includes("RETURNED")}
                onChange={handleCheckBox}
              />
              <label htmlFor="Returned">Returned</label>
            </div>
          </div>
          <div className={styles.myOrder_left_table}>
            <div className={styles.myOrder_left_table_row}>
              <div className={styles.myOrder_left_table_row_left}>
                <h4>Order time</h4>
              </div>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input id="LastOneWeek" type="checkbox" />
              <label htmlFor="LastOneWeek">Last one week</label>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input id="Last30Days" type="checkbox" />
              <label htmlFor="Last30Days">Last 30 days</label>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input id="2022" type="checkbox" />
              <label htmlFor="2022">2022</label>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input id="2021" type="checkbox" />
              <label htmlFor="2021">2021</label>
            </div>
          </div>
        </div>
        <div className={styles.myOrder_right}>
          <div className={styles.myOrder_right_search}>
            <input type="text" placeholder="Search my orders" />
            <div className={styles.searchButton}>
              <img src="/img/profile/searchIcon.svg" alt="" />
            </div>
          </div>
          <div className={styles.myOrder_right_productsContainer}>
            {filteredmyOrders?.length > 0 ? (
              <>
                {filteredmyOrders.map((orders) =>
                  orders?.products.map((items) => {
                    return (
                      <div className={styles.myOrder_right_productCard}>
                        <img src={items?.productId?.thumbnail} alt="productImages" />
                        <div className={styles.myOrder_right_productCard_details}>
                          <div className={styles.myOrder_right_productCard_left}>
                            <p>{items?.productId?.name}</p>
                            <span>Order date : {moment(orders?.createdAt).format("l")}</span>
                            <div className={styles.priceContainer}>
                              {items?.productId?.discount_rate ? (
                                <>
                                  <h5>
                                    ₹
                                    {Math.trunc(
                                      items?.productId?.mrp -
                                        (items?.productId?.mrp * items?.productId?.discount_rate) / 100
                                    ) * items?.quantity}
                                  </h5>
                                  <p>₹{items?.productId?.mrp}</p>
                                  <span>{items?.productId?.discount_rate}% off</span>
                                </>
                              ) : (
                                <h5>₹ {items?.productId?.mrp}</h5>
                              )}
                            </div>
                          </div>
                          <div className={styles.myOrder_right_productCard_right}>
                            {items?.delivery_status === "DELIVERED" ? (
                              <>
                                <span>
                                  <img src="/img/profile/greenTick.svg" alt="" />
                                  {items?.delivery_status} on {moment(orders?.updatedAt).format("LL")}
                                </span>
                                <p>
                                  Your item has been{" "}
                                  <span style={{ textTransform: "lowercase" }}>{items?.delivery_status}</span>
                                </p>
                              </>
                            ) : items?.delivery_status === "SHIPPED" ? (
                              <>
                                <span>
                                  <img src="/img/profile/truck.png" alt="" />
                                  {items?.delivery_status} on {moment(orders?.updatedAt).format("LL")}
                                </span>
                                <p>
                                  Your item has been{" "}
                                  <span style={{ textTransform: "lowercase" }}>{items?.delivery_status}</span>
                                </p>
                                <p style={{ color: "green" }}>
                                  Expected Delivery :{" "}
                                  <span style={{ textTransform: "lowercase" }}>
                                    {moment(items.delivery_date).format("ll")}
                                  </span>
                                </p>
                              </>
                            ) : (
                              <p>
                                Your order is{" "}
                                <span style={{ textTransform: "lowercase" }}>{items.delivery_status}</span>...
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </>
            ) : (
              "No Results Available"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
