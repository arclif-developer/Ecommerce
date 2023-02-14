/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Home.module.css";
import SectionThree from "./home/SectionThree";
import SectionTwo from "./SectionTwo";

const HomePage = () => {
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
      <SectionTwo />
      <SectionTwo />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default HomePage;
