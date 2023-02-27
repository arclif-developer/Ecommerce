/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import SectionThree from "./home/SectionThree";
import SectionTwo from "./SectionTwo";
var Api_url = "https://agriha-backend.onrender.com";

const HomePage = () => {
  const [categories, setCategory] = useState([]);
  async function getAllCategoryFn() {
    const AprResponse = await fetch(`${Api_url}/admin/product/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await AprResponse.json();
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
            <div className={styles.askProducts_button}>Ask products</div>
            <img src="/img/home/img1.png" alt="" />
          </div>
        </div>
      </div>
      {categories.length > 0 ? (
        <>
          {categories.map((items, index) => {
            return (
              <React.Fragment key={index}>
                <SectionTwo items={items}/>
              </React.Fragment>
            );
          })}
        </>
      ) : (
        ""
      )}

      {/* <SectionTwo />
      <SectionTwo /> */}
      <SectionThree />
    </div>
  );
};

export default HomePage;
