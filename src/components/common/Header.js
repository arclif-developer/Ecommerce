/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";
import Link from "next/link";

import styles from "./Header.module.css";
import backend from "@/global/backend";

const Header = () => {
  const router = useRouter();
  const [Store] = useContext(StoreContext);
  const setUserRole = Store.setUserRole;
  const setUserDetail = Store.setUserDetail;
  const setAskProductPopup = Store.setAskProductPopup;

  const [role, setRole] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const role = localStorage.getItem("role");
      setRole(role);
      // if (role === "" || role === null || role === undefined) {
      //   router.push("/");
      //   if (role !== "general") {
      //     router.push("/business-home");
      //   }
      //   if (role !== "business") {
      //     router.push("/");
      //   }
      // }
    }
  }, []);

  async function getEcommerceDetails() {
    const token = localStorage.getItem("token");
    const res = await fetch(`${backend}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setUserDetail(data.userData);
  }

  useEffect(() => {
    getEcommerceDetails();
  }, []);

  return (
    <>
      <div className={styles.header_outer}>
        <div className={styles.header_inner}>
          <div className={styles.header_left}>
            {role == "business" ? (
              <Link href="/business-home">
                <img src="/img/common/logo.svg" alt="LOGO" />
              </Link>
            ) : (
              <Link href="/">
                <img src="/img/common/logo.svg" alt="LOGO" />
              </Link>
            )}
          </div>
          <div className={styles.header_center}>
            {role == "general" || role == "business" ? (
              <div className={styles.header_search}>
                <input placeholder="What are you looking for?" onClick={() => router.push("/search")} />
                <img src="/icon/search.svg" alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.header_right}>
            {role == "general" ? (
              <>
                <div className={styles.header_right_icons}>
                  <span className={styles.favorites}>
                    <img className={styles.nh} src="/icon/favorites-nh.svg" alt="" />
                    <img className={styles.h} src="/icon/favorites-h.svg" alt="" />
                  </span>
                  <span className={styles.delete} onClick={() => router.push("/cart")}>
                    <img className={styles.nh} src="/icon/delete-nh.svg" alt="" />
                    <img className={styles.h} src="/icon/delete-h.svg" alt="" />
                  </span>
                  <span className={styles.user} onClick={() => router.push("/profile")}>
                    <img className={styles.nh} src="/icon/user-nh.svg" alt="" />
                    <img className={styles.h} src="/icon/user-h.svg" alt="" />
                  </span>
                </div>
                <div className={styles.askProducts_button} onClick={() => setAskProductPopup(true)}>
                  Ask products
                </div>
              </>
            ) : role == "business" ? (
              <>
                <div className={styles.header_right_icons}>
                  <Link href="/business-home">
                    <span className={`${styles.favorites} ${router.pathname == "/business-home" ? styles.active : ""}`}>
                      <img className={styles.nh} src="/icon/bell-nh.svg" alt="" />
                      <img className={styles.h} src="/icon/bell-h.svg" alt="" />
                    </span>
                  </Link>
                  <Link href="/order-list">
                    <span className={`${styles.delete} ${router.pathname == "/order-list" ? styles.active : ""}`}>
                      <img className={styles.nh} src="/icon/orderlist-nh.svg" alt="" />
                      <img className={styles.h} src="/icon/orderlist-h.svg" alt="" />
                    </span>
                  </Link>
                  <Link href="/business-account">
                    <span className={`${styles.user} ${router.pathname == "/business-account" ? styles.active : ""}`}>
                      <img className={styles.nh} src="/icon/user-nh.svg" alt="" />
                      <img className={styles.h} src="/icon/user-h.svg" alt="" />
                    </span>
                  </Link>
                </div>
                <Link href="/add-product">
                  <div className={styles.askProducts_button}>Sell produts</div>
                </Link>
              </>
            ) : (
              <>
                <div onClick={() => (setUserRole("general"), router.push(`/login`))} className={styles.general_login}>
                  Login
                </div>
                <div onClick={() => (setUserRole("business"), router.push(`/login`))} className={styles.business_login}>
                  For business
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {role == "general" || role == "business" ? (
        <div className={styles.mobile_search}>
          <div className={styles.header_search}>
            <input placeholder="What are you looking for?" onClick={() => router.push("/search")} />
            <img src="/icon/search.svg" alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
