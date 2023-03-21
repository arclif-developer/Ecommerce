import { useContext } from "react";
import { StoreContext } from "@/global/StoreContext";
import Head from "next/head";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import AskProductPopUp from "@/src/components/common/askProduct-popup";
import HomeWallet from "@/src/components/wallet/HomeWallet";
import RedeemPopup from "@/src/components/wallet/redeemPopup";
import AddCoinPopup from "@/src/components/wallet/addCoinPopup";

import styles from "./index.module.css";

export default function Wallet() {
  const [Store] = useContext(StoreContext);
  const askProductPopup = Store.askProductPopup;
  const redeemPopup = Store.redeemPopup;
  const addCoinPopup = Store.addCoinPopup;

  return (
    <>
      <Head>
        <title>Wallet | Arclif</title>
        <meta name="description" content="Get suitable construction materials fro your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <Header />
          <div className={styles.main_inner}>
            <HomeWallet />
          </div>
          <Footer />
        </div>
        {askProductPopup ? <AskProductPopUp /> : ""}
        {redeemPopup ? <RedeemPopup /> : ""}
        {addCoinPopup ? <AddCoinPopup /> : ""}
      </main>
    </>
  );
}
