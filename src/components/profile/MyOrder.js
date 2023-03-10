/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./MyOrder.module.css";

const MyOrder = () => {
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
              <span>Clear all</span>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input type="checkbox" />
              <p>On the way</p>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input type="checkbox" />
              <p>Delivered</p>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input type="checkbox" />
              <p>Cancelled</p>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input type="checkbox" />
              <p>Returned</p>
            </div>
          </div>
          <div className={styles.myOrder_left_table}>
            <div className={styles.myOrder_left_table_row}>
              <div className={styles.myOrder_left_table_row_left}>
                <h4>Order time</h4>
              </div>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input type="checkbox" />
              <p>Last one week</p>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input type="checkbox" />
              <p>Last 30 days</p>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input type="checkbox" />
              <p>2022</p>
            </div>
            <div className={styles.myOrder_left_table_row}>
              <input type="checkbox" />
              <p>2021</p>
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
            <div className={styles.myOrder_right_productCard}>
              <img
                src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "
                alt=""
              />
              <div className={styles.myOrder_right_productCard_details}>
                <div className={styles.myOrder_right_productCard_left}>
                  <p>The Sleep Company SmartGRID High-Back ...</p>
                  <span>Order date : 20-10-2023</span>
                  <div className={styles.priceContainer}>
                    <h5>???349</h5>
                    <p>???1,499</p>
                    <span>76% off</span>
                  </div>
                </div>
                <div className={styles.myOrder_right_productCard_right}>
                  <span>
                    <img src="/img/profile/greenTick.svg" alt="" />
                    Delivered on Oct 07, 2022
                  </span>
                  <p>Your item has been delivered</p>
                </div>
              </div>
            </div>

            <div className={styles.myOrder_right_productCard}>
              <img
                src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "
                alt=""
              />
              <div className={styles.myOrder_right_productCard_details}>
                <div className={styles.myOrder_right_productCard_left}>
                  <p>The Sleep Company SmartGRID High-Back ...</p>
                  <span>Order date : 20-10-2023</span>
                  <div className={styles.priceContainer}>
                    <h5>???349</h5>
                    <p>???1,499</p>
                    <span>76% off</span>
                  </div>
                </div>
                <div className={styles.myOrder_right_productCard_right}>
                  <span>
                    <img src="/img/profile/greenTick.svg" alt="" />
                    Delivered on Oct 07, 2022
                  </span>
                  <p>Your item has been delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
