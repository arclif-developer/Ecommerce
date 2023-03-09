/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { StoreContext } from "@/global/StoreContext";
import OtpInput from "react-otp-input";
// import OTPInput from "otp-input-react";
// import OTPInput, { ResendOTP } from "otp-input-react";
import backend from "@/global/backend";

import styles from "./index.module.css";

export default function OtpMain() {
  const router = useRouter();
  const [Store] = useContext(StoreContext);

  const setLoginActive = Store.setLoginActive;
  const setUserId = Store.setUserId;
  const setToken = Store.setToken;
  const fromLoginOrRegister = Store.fromLoginOrRegister;

  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Please enter Mobile Number");

  const [OTP, setOTP] = useState("");
  console.log(OTP);

  const [counter, setCounter] = React.useState(300);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  const dateObj = new Date(counter * 1000);
  const utcString = dateObj.toUTCString();
  const time = utcString.slice(-11, -4);

  /* VERIFY OTP Login */
  async function handleSubmitLogin(otp) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${backend}/auth/verify_login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + `${token}`,
      },
      body: JSON.stringify({
        otp: otp,
      }),
    });
    const data = await res.json();
    console.log(data);
    setLoading(false);
    if (data.status === 200) {
      setUserId(data.id);
      setLoginActive(true);
      localStorage.removeItem("token");
      localStorage.setItem("role", data.role);
      localStorage.setItem("token", data.token);
      localStorage.setItem("Id", data.id);
      if (data.role === "general") {
        router.push(`/`);
      } else if (data.role === "business") {
        router.push(`/`);
      }
    } else {
      setIsError(true);
      setError(data.message);
    }
  }

  /* VERIFY OTP Register */
  async function handleSubmit(otp) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${backend}/auth/verify_mobile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + `${token}`,
      },
      body: JSON.stringify({
        otp: otp,
      }),
    });
    const data = await res.json();
    console.log(data);
    setLoading(false);
    if (data.status === 200) {
      setUserId(data.id);
      setLoginActive(true);
      localStorage.removeItem("token");
      localStorage.setItem("role", data.role);
      localStorage.setItem("token", data.token);
      localStorage.setItem("Id", data.id);
      if (data.role === "general") {
        router.push(`/`);
      } else if (data.role === "business") {
        router.push(`/`);
      }
    } else {
      setIsError(true);
      setError(data.message);
    }
  }

  const verifyClick = () => {
    if (OTP !== "") {
      setLoading(true);
      handleSubmit(OTP);
    }
  };

  const verifyClickLogin = () => {
    if (OTP !== "") {
      setLoading(true);
      handleSubmitLogin(OTP);
    }
  };
  return (
    <>
      <div className={styles.secOne}>
        <div className={styles.secOneInner}>
          <div className={styles.top}>
            <h1>Verification</h1>
            <p className={styles.otp_text}>OTP code we just send to your mobile number</p>
            <div className={styles.otp_feild}>
              <OtpInput value={OTP} onChange={setOTP} numInputs={6} separator={<span>-</span>} />
              {/* <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} /> */}
            </div>
            <div className={styles.additional}>
              <div className={styles.resend}>
                Remaining time :{/* Don&apos;t receive the code ? <span>Resend</span> */}
              </div>
              <div className={styles.time}>{time}</div>
            </div>
            {/* <ResendOTP maxTime={3000000000} onResendClick={() => console.log("Resend clicked")} /> */}

            {counter === 0 ? (
              <button className={styles.send} style={{ backgroundColor: "#ccc" }}>
                Time Exceeded
              </button>
            ) : (
              <>
                {fromLoginOrRegister == "login" ? (
                  <>
                    <button className={styles.send} onClick={verifyClickLogin}>
                      Verify
                    </button>
                  </>
                ) : (
                  <>
                    <button className={styles.send} onClick={verifyClick}>
                      Verify
                    </button>
                  </>
                )}
              </>
            )}
          </div>
          <div className={styles.bottom}>
            <p className={styles.bottomp}>
              Not on Arclif yet?{" "}
              <Link href={"/register"}>
                <span>Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
