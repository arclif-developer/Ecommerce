/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function OtpMain() {
  const [code, setcode] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    props.setcode([...props.code.map((d, indx) => (indx === index ? element.value : d))]);

    //Focus next input

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <>
      <div className={styles.secOne}>
        <div className={styles.secOneInner}>
          <div className={styles.top}>
            <h1>Verification</h1>
            <p className={styles.otp}>OTP code we just send to your mobile number</p>
            <div className="digit-inputs">
              {code.map((data, index) => {
                return (
                  <input
                    type="text"
                    className="otp-field"
                    name="otp"
                    maxLength={1}
                    key={index}
                    style={data ? { borderBottom: "3px solid #7dbf2a" } : { borderBottom: "3px solid grey" }}
                    //value={data}
                    onFocus={(e) => e.target.select}
                    autoFocus={index === 0} // add this line
                    //onChange
                  />
                );
              })}
            </div>
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
