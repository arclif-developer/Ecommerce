/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./CartPageMain.module.css";

const CartPageMain = () => {
  return (
    <div className={styles.cartPage}>
      <div className={styles.cartPage_left}>
        <div className={styles.cartPage_left_header}>
          <h3>Selection cart</h3>
          <span>08 items</span>
        </div>
        <div className={styles.cartPage_left_products_container}>
          <div className={styles.cartPage_left_productCard}>
            <img
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y291Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={styles.cartCard_content}>
              <p>
                The Sleep Company Smart GRID Stylus High-Back Chair for Office & Overparented Smart GRID Technology
                Nylon Office Executive Chair.
              </p>
              <span>Pack of 1, Multicolor</span>
              <div className={styles.priceContainer}>
                <h5>₹349</h5>
                <p>₹3,299</p>
                <span>76% off</span>
              </div>
              <div className={styles.stock}>Stock in</div>
            </div>
          </div>

          <div className={styles.cartPage_left_productCard}>
            <img
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y291Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={styles.cartCard_content}>
              <p>
                The Sleep Company Smart GRID Stylus High-Back Chair for Office & Overparented Smart GRID Technology
                Nylon Office Executive Chair.
              </p>
              <span>Pack of 1, Multicolor</span>
              <div className={styles.priceContainer}>
                <h5>₹349</h5>
                <p>₹3,299</p>
                <span>76% off</span>
              </div>
              <div className={styles.stock}>Stock in</div>
            </div>
          </div>

          <div className={styles.cartPage_left_productCard}>
            <img
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y291Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={styles.cartCard_content}>
              <p>
                The Sleep Company Smart GRID Stylus High-Back Chair for Office & Overparented Smart GRID Technology
                Nylon Office Executive Chair.
              </p>
              <span>Pack of 1, Multicolor</span>
              <div className={styles.priceContainer}>
                <h5>₹349</h5>
                <p>₹3,299</p>
                <span>76% off</span>
              </div>
              <div className={styles.stock}>Stock in</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cartPage_right}>
        <div className={styles.cartPage_right_header}>
          <h3>Price details</h3>
          <img src="/img/profile/i.svg" alt="" />
        </div>
        <div className={styles.cartPage_right_content}>
          <div className={styles.cartPage_right_content_row}>
            <p>Price ( 03 items ) :</p> <span>₹33,249.00</span>
          </div>
          <div className={styles.cartPage_right_content_row}>
            <p>Discount :</p> <span> ₹1,249.00</span>
          </div>
          <div className={styles.cartPage_right_content_row}>
            <p>Delivery charge :</p> <span>Free</span>
          </div>
          <span className={styles.spanOne}></span>
          <div className={styles.subtotal}>
            <p>Subtotal (02 items)</p>
            <span>₹3,249.00</span>
          </div>
          <div className={styles.orderNow_button}>Order now</div>
          <div className={styles.deliveryAddress}>
            <div className={styles.deliveryAddress_left}>
              <img src="/img/cart/location.svg" alt="" />
              <p>Delivery address</p>
            </div>
            <div className={styles.EditButton}>Edit</div>
          </div>
          <div className={styles.deliveryAddress_select}>
            <input type="checkbox" />
            <p>Great South Road, Manukau, Saules ilea 7 - 16, Cosi</p>
          </div>
          <span></span>
          <div className={styles.deliveryAddress_button}>Delivery address +</div>
          <span></span>
          <div className={styles.terms}>
            <img src="/img/cart/privacy.svg" alt="" />
            <p>Safe and Secure Payments.100% Authentic products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageMain;
