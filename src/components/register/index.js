/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function RegisterMain() {
  return (
    <>
      <div className={styles.secOne}>
        <div className={styles.secOneInner}>
          <div className={styles.top}>
            <h1>Registraion</h1>
            <p className={styles.otp}>6 digit OTP will be sent via sms to your Mobile Number</p>
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter Mobile Number" />
            <input type="text" placeholder="Email address" />
            <p className={styles.privacy}>
              By continuing, you agree to Arclif's <span>Terms of Service</span> and <span>Privacy policy</span>.
            </p>
            <button className={styles.send}>Send OTP</button>
          </div>
          <div className={styles.bottom}>
            <p className={styles.bottomp}>
              Already a member? <span>Log in</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
