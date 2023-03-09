import { StoreContext } from "@/global/StoreContext";
import CartPageMain from "@/src/components/cart/CartPageMain";
import AskProductPopUp from "@/src/components/common/askProduct-popup";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import AddAddressPopUp from "@/src/components/profile/AddAddressPopUp";
import Head from "next/head";
import { useContext } from "react";

import styles from "./index.module.css";

export default function Profile() {
  const [Store] = useContext(StoreContext);
  const askProductPopup = Store.askProductPopup;
  const addAddressPopUp = Store.addAddressPopUp;

  return (
    <>
      <Head>
        <title>Profile | Arclif</title>
        <meta name="description" content="Get suitable construction materials fro your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <Header />
          <div className={styles.main_inner}>
            <CartPageMain />
          </div>
          <Footer />
        </div>
        {askProductPopup ? <AskProductPopUp /> : ""}
        {addAddressPopUp ? <AddAddressPopUp /> : ""}
      </main>
    </>
  );
}
