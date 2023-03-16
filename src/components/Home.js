/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect, useContext } from "react";
import { StoreContext } from "@/global/StoreContext";
import backend from "@/global/backend";
import SectionTwo from "./SectionTwo";
import SectionThree from "./home/SectionThree";

import styles from "./Home.module.css";

const HomePage = () => {
  const [Store] = useContext(StoreContext);
  const setAskProductPopup = Store.setAskProductPopup;

  const [categories, setCategory] = useState([]);
  async function getAllCategoryFn() {
    const ApiResponse = await fetch(`${backend}/admin/product/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res = await ApiResponse.json();
    setCategory(res?.category);
  }
  useEffect(() => {
    getAllCategoryFn();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.sectionOne}>
        <div className={styles.section_left}>
          <img src="/img/home/mainAd.png" alt="" />
        </div>
        <div className={styles.section_right}>
          <div className={styles.section_right_top}>
            <h5>
              Couldn`t find your <span>Products</span>
            </h5>
            <p>Explore 2800+ products</p>
          </div>
          <div className={styles.section_right_bottom}>
            <div className={styles.askProducts_button} onClick={() => setAskProductPopup(true)}>
              Ask products
            </div>
            <img src="/img/home/img1.png" alt="" />
          </div>
        </div>
      </div>
      {categories.length > 0 ? (
        <>
          {categories.map((items, index) => {
            return (
              <React.Fragment key={index}>
                <SectionTwo items={items} />
              </React.Fragment>
            );
          })}
        </>
      ) : (
        ""
      )}

      {/* <SectionTwo />
      <SectionTwo /> */}
      {/* <SectionThree /> */}
    </div>
  );
};

export default HomePage;
