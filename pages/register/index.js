import Head from "next/head";
import { useContext } from "react";
import { StoreContext } from "@/global/StoreContext";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import RegisterMain from "@/src/components/register";
import Help from "@/src/components/home/Help";
import AskProductPopUp from "@/src/components/common/askProduct-popup";

import styles from "./index.module.css";

export default function RegisterPage() {
  const [Store] = useContext(StoreContext);
  const askProductPopup = Store.askProductPopup;

  return (
    <>
      <Head>
        <title>Register | Arclif</title>
        <meta name="description" content="Get suitable construction materials fro your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <Header />
          <div className={styles.main_inner}>
            <RegisterMain />
          </div>
          <Help />
          <Footer />
        </div>
        {askProductPopup ? <AskProductPopUp /> : ""}
      </main>
    </>
  );
}
