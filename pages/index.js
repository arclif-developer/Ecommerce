import Head from "next/head";
import HomePage from "../src/components/Home";
import Header from "../src/components/common/Header";

import styles from "../styles/index.module.css";
import Help from "@/src/components/home/Help";
import Footer from "@/src/components/common/Footer";
import { useContext } from "react";
import { StoreContext } from "@/global/StoreContext";
import AskProductPopUp from "@/src/components/common/askProduct-popup";

export default function Home() {
  const [Store] = useContext(StoreContext);
  const askProductPopup = Store.askProductPopup;

  console.log(askProductPopup);
  return (
    <>
      <Head>
        <title>Home | Arclif</title>
        <meta name="description" content="Get suitable construction materials fro your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <Header />
          <div className={styles.main_inner}>
            <HomePage />
          </div>
          <Help />
          <Footer />
        </div>
        {askProductPopup ? <AskProductPopUp /> : ""}
      </main>
    </>
  );
}
