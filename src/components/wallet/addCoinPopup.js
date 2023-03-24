/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";

import styles from "./addCoinPopup.module.css";
import backend from "@/global/backend";
import { PulseLoader } from "react-spinners";

const AddCoinPopup = () => {
  const [Store] = useContext(StoreContext);
  const setAddCoinPopup = Store.setAddCoinPopup;
  const coinRatio = Store.coinRatio;

  // console.log(coinRatio);

  const [coinCount, setCoinCount] = useState(0);
  const [loading, setloading] = useState(false);

  const handleChangeInput = (e) => {
    if (e.target.value > 0) {
      setCoinCount(parseInt(e.target.value));
    } else {
      setCoinCount(parseInt(0));
    }
  };

  const handlePayment = async () => {
    if (coinCount > 0) {
      setloading(true);
      const token = localStorage.getItem("token");
      const orderResponse = await fetch(`${backend}/wallet/purchaseCoin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: coinCount,
        }),
      });
      const res = await orderResponse.json();
      if (res.status === 200) {
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
            callback_url: `${backend}/wallet/verify`,
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
      } else {
        setloading(false);
      }
    }
  };

  return (
    <div className={styles.redeemPopup_outer}>
      <div className={styles.redeemPopup_close} onClick={() => setAddCoinPopup(false)}></div>
      <div className={styles.redeemPopup_inner}>
        <div className={styles.redeemPopup_inner_inner}>
          <div className={styles.redeemPopup_header}>
            <h4>Add Coin to your account</h4>
            <img src="/icon/closePopup.svg" alt="" onClick={() => setAddCoinPopup(false)} />
          </div>
          <div className={styles.redeemContent_container}>
            <div className={styles.input_label}>
              <label htmlFor="coinInput">Required Number of coin:</label>
            </div>
            <div className={styles.input_coin}>
              <input
                id="coinInput"
                type="number"
                placeholder="Count"
                min="1"
                defaultValue={coinCount}
                onChange={handleChangeInput}
              />
            </div>
            <div className={styles.amount}>
              <span> Amount : </span>
              <span>
                Rs<span>{coinRatio * coinCount}</span>/-
              </span>
            </div>
            {loading === true ? (
              <div className={styles.paynow} onClick={handlePayment}>
                <PulseLoader color="#ffffff" />
              </div>
            ) : (
              <div className={styles.paynow} onClick={handlePayment}>
                Pay now
              </div>
            )}
            <div className={styles.payment_with}>
              <span>Secure payment with</span>
              <img src="img/wallet/Razorpay_logo.svg" alt="Razorpay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoinPopup;
