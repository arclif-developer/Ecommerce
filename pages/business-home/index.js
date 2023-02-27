import React, { useRef, useState, useEffect, useContext } from "react";
import { StoreContext } from "@/global/StoreContext";
import Head from "next/head";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import BusinessHomeMain from "@/src/components/business-home";
import ViewOrderPopUp from "@/src/components/common/viewOrderPopup";

import styles from "./index.module.css";

export default function BusinessHomePage() {
  const [Store] = useContext(StoreContext);
  const viewOrderPopup = Store.viewOrderPopup;
  return (
    <>
      <Head>
        <title>Business Home | Arclif</title>
        <meta name="description" content="Business Account for your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <Header />
          <div className={styles.main_inner}>
            <BusinessHomeMain />
          </div>
          <Footer />
        </div>
      </main>
      {viewOrderPopup ? <ViewOrderPopUp /> : ""}
    </>
  );
}
