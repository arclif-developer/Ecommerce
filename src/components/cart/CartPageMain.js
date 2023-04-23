/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import React, { useContext, useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import styles from "./CartPageMain.module.css";
import backend from "@/global/backend";

const CartPageMain = () => {
  const [Store] = useContext(StoreContext);
  const userId = Store.userId;
  const setUserId = Store.setUserId;
  const deliveryAddress = Store.deliveryAddress;
  const setDeliveryAddress = Store.setDeliveryAddress;
  const setAddAddressPopUp = Store.setAddAddressPopUp;
  const [token, setToken] = useState();
  const [auth, setAuth] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [grandTotal, setGrandTotal] = useState();
  const [checkBox, setcheckBox] = useState("");
  const [addressId, setAddressId] = useState("");
  const [razorpayOrderId, setRazorpayOrderId] = useState();

  async function getUserCartItemsFn(userid) {
    const ApiResponse = await fetch(`${backend}/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await ApiResponse.json();
    setCartItems(res?.items);
    console.log(res);
  }

  async function getDeliveryAddressFn() {
    if (token) {
      const ApiResponse = await fetch(`${backend}/address`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await ApiResponse.json();
      setDeliveryAddress(res.data);
    }
  }
  const handleCheckbox = (index, id) => {
    setcheckBox(index);
    setAddressId(id);
  };

  useEffect(() => {
    if (!userId || (!token && auth)) {
      let token = localStorage.getItem("token");
      let id = localStorage.getItem("Id");
      if (token && id) {
        setToken(token);
        setUserId(id);
      } else {
        setAuth(false);
      }
    }
    if (userId && token) {
      getUserCartItemsFn(userId);
    }
    if (deliveryAddress.length === 0) {
      getDeliveryAddressFn();
    }
  }, [userId, token]);

  const handleOrder = async () => {
    if (addressId) {
      if (order.length > 0 && grandTotal) {
        setLoading(true);
        const ApiResponse = await fetch(`${backend}/product/payment/create-order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            amount: grandTotal,
            currency: "INR",
            address_id: addressId,
            product_id: order,
            payment_mode: "online",
          }),
        });
        const res = await ApiResponse.json();
        if (res?.data?.payment_method === "online") {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.async = true;
          script.onload = () => {
            const options = {
              key: "rzp_test_iMKaW0U63x6w4O", // Enter the Key ID generated from the Dashboard
              // amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency: "INR",
              name: "Arclif", //your business name
              description: "Test Transaction",
              image: "https://example.com/your_logo",
              order_id: `${res?.data?.razorpay_order_id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              callback_url: `${backend}/product/payment/verify`,
              prefill: {
                name: "Gaurav Kumar", //your customer's name
                email: "gaurav.kumar@example.com",
                contact: "9000090000",
              },
              notes: {
                address: "Razorpay Corporate Office",
              },
              theme: {
                color: "#3399cc",
              },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
          };
          document.body.appendChild(script);
        }
      }
    } else {
      alert("Please select address");
    }
  };

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
  console.log(order);
  console.log(grandTotal);

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
                {
                  order[index]?.productId === items?.product_id._id ? (
                    ""
                  ) : (
                    <>
                      {items?.product_id?.seller_id
                        ? order.push({
                            productId: items?.product_id._id,
                            quantity: items?.quantity,
                            seller_id: items?.product_id?.seller_id,
                            amount:
                              Math.trunc(
                                items?.product_id?.mrp -
                                  (items?.product_id?.mrp * items?.product_id?.discount_rate) / 100
                              ) * items?.quantity,
                          })
                        : order.push({
                            productId: items?.product_id._id,
                            quantity: items?.quantity,
                            admin: true,
                            amount:
                              Math.trunc(
                                items?.product_id?.mrp -
                                  (items?.product_id?.mrp * items?.product_id?.discount_rate) / 100
                              ) * items?.quantity,
                          })}
                    </>
                  );
                }
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
          {loading === true ? (
            <div className={styles.orderNow_button}>
              <PulseLoader color="#ffffff" />
            </div>
          ) : (
            <div className={styles.orderNow_button} onClick={handleOrder}>
              Order now
            </div>
          )}
          <div className={styles.deliveryAddress}>
            <div className={styles.deliveryAddress_left}>
              <img src="/icon/address-nh.svg" alt="" />
              <p>Delivery address</p>
            </div>
            <div className={styles.EditButton}>Edit</div>
          </div>
          {deliveryAddress.length > 0 ? (
            <>
              {deliveryAddress.map((items, index) => {
                return (
                  <div className={styles.deliveryAddress_select} key={index}>
                    <input
                      type="checkbox"
                      id={index}
                      name="myCheckbox"
                      checked={index === checkBox}
                      value={index}
                      onClick={() => handleCheckbox(index, items._id)}
                    />
                    <label htmlFor={index}>
                      {items.address}, {items.location}, {items.city}, {items.district}, {items.pincode}
                    </label>
                  </div>
                );
              })}
            </>
          ) : (
            <p>No address added</p>
          )}

          <span></span>
          <div className={styles.deliveryAddress_button} onClick={() => setAddAddressPopUp(true)}>
            Delivery address +
          </div>
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
