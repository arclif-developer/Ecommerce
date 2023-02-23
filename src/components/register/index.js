/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function RegisterMain() {
  return (
    <>
      <div className={styles.secOne}>
        <h1>Order list</h1>
        <div className={styles.secOneInner}>Register</div>
      </div>
    </>
  );
}
