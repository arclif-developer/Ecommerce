/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";
import Header from "../src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import Help from "@/src/components/home/Help";
import AskProductPopUp from "@/src/components/common/askProduct-popup";

import styles from "../styles/index.module.css";
import style from "./404.module.css";

export default function NotFountPage() {
  const router = useRouter();
  const [Store] = useContext(StoreContext);
  const askProductPopup = Store.askProductPopup;
  return (
    <>
      <Head>
        <title>404 | Arclif</title>
        <meta name="description" content="Get suitable construction materials fro your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <Header />
          <div className={styles.main_inner}>
            <section className={style.sectionOne}>
              <div className={style.not_fount_outer}>
                <div className={style.main_img}>
                  <img src="/img/404/person.png" alt="img" />
                  <img src="/img/404/all.png" alt="img" />
                </div>
                <div className={style.text}>
                  <div>Woops! You&apos;ve moved so fast and got lost...</div>
                </div>
                <div className={style.button} onClick={() => router.push(`/`)}>
                  <div>
                    <img src="/img/common/back.png" alt="img" />
                    <span>Back to home</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Help />
          <Footer />
        </div>
        {askProductPopup ? <AskProductPopUp /> : ""}
      </main>
    </>
  );
}
