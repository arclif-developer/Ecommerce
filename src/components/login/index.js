/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";
import { PulseLoader } from "react-spinners";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import styles from "./index.module.css";

export default function LoginMain() {
  const [Store] = useContext(StoreContext);

  const userRole = Store.userRole;
  const setFromLoginOrRegister = Store.setFromLoginOrRegister;

  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resentLoading, setResentLoading] = useState(false);
  const [error, setError] = useState("Please enter Mobile Number");
  const [showOtpText, setShowOtpText] = useState(false);

  const [phone, setphone] = useState("");
  const [code, setCode] = useState("91");

  const storeValues = (e) => {
    setphone(e.target.value);
  };

  async function handleSubmit() {
    const res = await fetch(`${endpoint}/auth/mobile_login`, {
      // const res = await fetch(`${endpoint}/auth/test/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        phone: `+${code}${phone}`,
        role: userRole,
      }),
    });
    const data = await res.json();
    console.log(data);
    setLoading(false);
    if (data.status === 404) {
      setIsError(true);
      setError("Mobile number not registered");
    } else if (data.status === 200) {
      setFromLoginOrRegister("login");
      // setOtpPopup(true);
      // setLoginPopup(false);
      localStorage.setItem("token", data.token);
    } else if (data.message === "Registeration process is not correct.Please register correctly") {
      setShowOtpText(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  function showOtp() {
    if (phone !== "") {
      setLoading(true);
      handleSubmit();
    } else {
      setIsError(true);
    }
  }

  useEffect(() => {
    if (document.getElementById("phone_no")) {
      document.getElementById("phone_no").focus();
    }
  }, []);

  async function resentOTP() {
    const res = await fetch(`${endpoint}/auth/resent_otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        phone: `+${code}${phone}`,
        role: userRole,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 200) {
      setFromLoginOrRegister("login");
      // setOtpPopup(true);
      // setLoginPopup(false);
      localStorage.setItem("token", data.otpToken);
    }
  }

  const registerClick = () => {
    setResentLoading(true);
    resentOTP();
  };

  return (
    <>
      <div className={styles.secOne}>
        <div className={styles.secOneInner}>
          <h1>{userRole === "business" ? "Business" : "General"} Log in</h1>
          <p className={styles.otptext}>OTP will be sent via sms to your Mobile Number</p>
          <div className={styles.phone_feild}>
            <PhoneInput country={"in"} value={code} onChange={(phone) => setCode(phone)} />
            <input id="phone_no" type="tel" onChange={storeValues} placeholder="Enter Mobile Number" />
          </div>
          {isError ? <p>{error}</p> : ""}
          {showOtpText ? (
            <h5>
              OTP verification not completed on Register!{" "}
              {resentLoading ? (
                <PulseLoader size={7} color="#4c0ad6" />
              ) : (
                <span onClick={registerClick}>Resent OTP</span>
              )}
            </h5>
          ) : (
            ""
          )}
          {loading ? (
            <div className={styles.submit}>
              <PulseLoader color="#ffffff" />
            </div>
          ) : (
            <div onClick={() => showOtp()} className={styles.submit}>
              Send OTP
            </div>
          )}
          <div className={styles.bottom}>
            <p className={styles.bottomp}>
              Not on Arclif yet? <span>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
