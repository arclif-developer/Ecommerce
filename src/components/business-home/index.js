/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";

import styles from "./index.module.css";

import backend from "@/global/backend";

export default function BusinessHomeMain() {
  const [Store] = useContext(StoreContext);
  const setViewOrderPopup = Store.setViewOrderPopup;
  const setViewOrderPopupItem = Store.setViewOrderPopupItem;

  const [selectDistrict, setSelectDistrict] = useState("all");
  const [reqProducts, setReqProducts] = useState([]);
  async function getAllRequestsprodFn() {
    const ApiResponse = await fetch(`${backend}/product/requestProduct_view?district=${selectDistrict}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await ApiResponse.json();
    if (data.status === 200) {
      setReqProducts(data?.reqProducts);
    }
  }

  useEffect(() => {
    getAllRequestsprodFn();
  }, [selectDistrict]);
  return (
    <>
      <div className={styles.secOne}>
        <div className={styles.secOneInner}>
          <div className={styles.MainbidTitle}>Latest product enquiry</div>
          <div className={styles.bidFilterOuter}>
            <span onClick={() => setSelectDistrict("all")}>All</span>
            <span onClick={() => setSelectDistrict("alappuzha")}>Alappuzha</span>
            <span onClick={() => setSelectDistrict("ernakulam")}>Ernakulam</span>
            <span onClick={() => setSelectDistrict("idukki")}>Idukki</span>
            <span onClick={() => setSelectDistrict("kannur")}>Kannur</span>
            <span onClick={() => setSelectDistrict("kasaragod")}>Kasaragod</span>
            <span onClick={() => setSelectDistrict("kollam")}>Kollam</span>
            <span onClick={() => setSelectDistrict("kottayam")}>Kottayam</span>
            <span onClick={() => setSelectDistrict("kozhikode")}>Kozhikode</span>
            <span onClick={() => setSelectDistrict("malappuram")}>Malappuram</span>
            <span onClick={() => setSelectDistrict("palakkad")}>Palakkad</span>
            <span onClick={() => setSelectDistrict("pathanamthitta")}>Pathanamthitta</span>
            <span onClick={() => setSelectDistrict("thiruvanthapuram")}>Thiruvanthapuram</span>
            <span onClick={() => setSelectDistrict("thiruvananthapuram")}>Thiruvananthapuram</span>
            <span onClick={() => setSelectDistrict("thrissur")}>Thrissur</span>
            <span onClick={() => setSelectDistrict("wayanad")}>Wayanad</span>
          </div>

          <div className={styles.bidTitle}>{selectDistrict}</div>
          {reqProducts.length > 0 ? (
            <div className={styles.bidOuter}>
              {reqProducts.map((items, i) => (
                <div
                  className={styles.bidInner}
                  onClick={() => (setViewOrderPopup(true), setViewOrderPopupItem(items))}
                  key={i}
                >
                  <img
                    className={styles.product}
                    src={items?.image ? items?.image : "/img/common/ni.svg"}
                    onError={(e) => (e.target.src = "/img/common/ina.svg")}
                    alt="Product Image"
                  />
                  <div className={styles.Desc}>{items?.description}</div>
                  <div className={styles.Locatn}>
                    <img src="/icon/address-h.png" alt="Address" />
                    <span>
                      {items.district}, {items.panchayath}
                    </span>
                  </div>
                  <div className={styles.Buttn}>{items.product_category}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.no_product_enquiry}>
              <img src="/img/business-home/no_product_enquiry.svg" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
