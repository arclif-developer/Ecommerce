/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import React, { useContext, useEffect, useState } from "react";
import styles from "./CartPageMain.module.css";
import backend from "@/global/backend";

const CartPageMain = () => {
  const [Store] = useContext(StoreContext);
  const userId = Store.userId;
  const setUserId = Store.setUserId;
  const [token, setToken] = useState();
  const [auth, setAuth] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [grandTotal, setGrandTotal] = useState();

  async function getUserCartItemsFn(userid) {
    const ApiResponse = await fetch(`${backend}/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await ApiResponse.json();
    setCartItems(res?.items);
    console.log(res);
  }

  useEffect(() => {
    if (!userId || (!token && auth)) {
      let token = localStorage.getItem("token");
      let id = localStorage.getItem("Id");
      if (token && id) {
        setToken(token);
        setUserId(id);
      } else {
        alert("Something went wrong, please logout and try again");
        router.push(`/login`);
        setAuth(false);
      }
    }
    if (userId && token) {
      getUserCartItemsFn(userId);
    }
  }, [userId, token]);

  useEffect(() => {
    if (cartItems.length > 0) {
      const price = cartItems.map((products) => products?.product_id?.mrp * products?.quantity);
      const discount = cartItems.map(
        (products) => (products?.product_id?.discount_rate * products?.product_id?.mrp * products?.quantity) / 100
      );
      const discountTotal = discount.reduce((acc, curr) => acc + curr);
      setDiscount(discountTotal);
      const total = price.reduce((acc, curr) => acc + curr);
      setPrice(total);
      setGrandTotal(total - discountTotal);
    }
  }, [cartItems]);

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartPage_left}>
        <div className={styles.cartPage_left_header}>
          <h3>Selection cart</h3>
          {cartItems?.length > 0 ? <span>{cartItems?.length} items</span> : <span>{cartItems?.length} items</span>}
        </div>
        {cartItems?.length > 0 ? (
          <>
            <div className={styles.cartPage_left_products_container}>
              {cartItems?.map((items, index) => {
                return (
                  <>
                    <div className={styles.cartPage_left_productCard}>
                      <img
                        src={items?.product_id?.thumbnail}
                        onError={(e) => (e.target.src = "/img/common/ina.svg")}
                        alt=""
                      />
                      <div className={styles.cartCard_content}>
                        <p>{items?.product_id?.name}</p>
                        <span>
                          Pack of {items.quantity}, {items?.product_id?.color.join(", ")}
                        </span>
                        <div className={styles.priceContainer}>
                          {items?.product_id?.discount_rate ? (
                            <>
                              <h5>
                                ₹
                                {Math.trunc(
                                  items?.product_id?.mrp -
                                    (items?.product_id?.mrp * items?.product_id?.discount_rate) / 100
                                )}
                              </h5>
                              <p>₹{items?.product_id?.mrp}</p>
                              <span>{items?.product_id?.discount_rate}% off</span>
                            </>
                          ) : (
                            <h5>₹{items?.product_id?.mrp}</h5>
                          )}
                        </div>
                        <div className={styles.stock}>Stock in</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        ) : (
          <p>No Cart items found</p>
        )}
      </div>
      <div className={styles.cartPage_right}>
        <div className={styles.cartPage_right_header}>
          <h3>Price details</h3>
          <img src="/img/profile/i.svg" alt="" />
        </div>
        <div className={styles.cartPage_right_content}>
          <div className={styles.cartPage_right_content_row}>
            <p>Price ( {cartItems?.length} items ) :</p> <span>₹{price}</span>
          </div>
          <div className={styles.cartPage_right_content_row}>
            <p>Discount :</p> <span> ₹{discount}</span>
          </div>
          <div className={styles.cartPage_right_content_row}>
            <p>Delivery charge :</p> <span>Free</span>
          </div>
          <span className={styles.spanOne}></span>
          <div className={styles.subtotal}>
            <p>Subtotal ({cartItems?.length} items)</p>
            <span>₹{grandTotal}</span>
          </div>
          <div className={styles.orderNow_button}>Order now</div>
          <div className={styles.deliveryAddress}>
            <div className={styles.deliveryAddress_left}>
              <img src="/icon/address-nh.svg" alt="" />
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
