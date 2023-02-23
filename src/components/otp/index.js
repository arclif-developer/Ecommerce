/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function OtpMain() {
  return (
    <>
      <div className={styles.secOne}>
        <div className={styles.secOneInner}>
          <div className={styles.top}>
            <h1>Verification</h1>
            <p className={styles.otp}>OTP code we just send to your mobile number</p>
            <input type="text" placeholder="Enter Mobile Number" />
            <button className={styles.send}>Verify</button>
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
