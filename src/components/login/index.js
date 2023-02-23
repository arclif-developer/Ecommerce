/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function LoginMain() {
  return (
    <>
      <div className={styles.secOne}>
        <div className={styles.secOneInner}>
          <div className={styles.top}>
            <h1>Log in</h1>
            <p className={styles.otp}>OTP will be sent via sms to your Mobile Number</p>
            <input type="text" placeholder="Enter Mobile Number" />
            <button className={styles.send}>Send OTP</button>
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
