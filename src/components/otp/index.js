/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
// import OTPInput, { ResendOTP } from "otp-input-react";
import OTPInput from "otp-input-react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function OtpMain() {
  const [OTP, setOTP] = useState("");
  console.log(OTP);

  const [counter, setCounter] = React.useState(300);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  const dateObj = new Date(counter * 1000);
  const utcString = dateObj.toUTCString();
  const time = utcString.slice(-11, -4);
  return (
    <>
      <div className={styles.secOne}>
        <div className={styles.secOneInner}>
          <div className={styles.top}>
            <h1>Verification</h1>
            <p className={styles.otp_text}>OTP code we just send to your mobile number</p>
            <div className={styles.otp_feild}>
              <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} />
            </div>
            <div className={styles.additional}>
              <div className={styles.resend}>
                Remaining time
                {/* Don&apos;t receive the code ? <span>Resend</span> */}
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
                <button className={styles.send}>Verify</button>
                {/* {fromLoginOrRegister == "login" ? (
                  <>
                    <button className={styles.send}>Verify</button>
                  </>
                ) : (
                  <>
                    <button className={styles.send}>Verify</button>
                  </>
                )} */}
              </>
            )}
          </div>
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
