/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import AccountSettings from "./AccountSettings";
import MyOrder from "./MyOrder";
import styles from "./ProfilePageMain.module.css";

const ProfilePageMain = () => {
  const [nav, setNav] = useState("order");

  return (
    <div className={styles.profilePageMain}>
      <div className={styles.profile_header}>
        <div className={styles.profile_header_personal}>
          <img src="/img/profile/avatar.svg" alt="" />
          <div className={styles.profile_header_personal_details}>
            <p>Hello,</p>
            <h5>Althaf Rahman</h5>
          </div>
        </div>
        <div className={styles.profile_header_options}>
          {nav === "order" ? (
            <div className={styles.profile_header_menu_active}>
              <img src="/img/profile/ordersC.svg" alt="" />
              <p>My order</p>
            </div>
          ) : (
            <div className={styles.profile_header_menu} onClick={() => setNav("order")}>
              <img src="/img/profile/ordersNC.svg" alt="" />
              <p>My order</p>
            </div>
          )}

          {nav === "settings" ? (
            <div className={styles.profile_header_menu_active}>
              <img src="/img/profile/settingsC.svg" alt="" />
              <p>Account settings</p>
            </div>
          ) : (
            <div className={styles.profile_header_menu} onClick={() => setNav("settings")}>
              <img src="/img/profile/settingsNC.svg" alt="" />
              <p>Account settings</p>
            </div>
          )}

          <div className={styles.profile_header_menu} onClick={() => setNav("history")}>
            <img src="/img/profile/historyNC.svg" alt="" />
            <p>Ask produts history</p>
          </div>
        </div>
      </div>
      <div className={styles.profile_body}>
        {nav === "order" ? <MyOrder /> : ""}
        {nav === "settings" ? <AccountSettings /> : ""}
      </div>
    </div>
  );
};

export default ProfilePageMain;
