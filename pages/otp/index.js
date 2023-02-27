import Head from "next/head";
import { useContext } from "react";
import { StoreContext } from "@/global/StoreContext";
import HeaderNotLogged from "@/src/components/common/HeaderNL";
import Header from "@/src/components/common/Header";
import HeaderOne from "@/src/components/common/Header1";
import Footer from "@/src/components/common/Footer";
import OtpMain from "@/src/components/otp";
import Help from "@/src/components/home/Help";
import AskProductPopUp from "@/src/components/common/askProduct-popup";

import styles from "./index.module.css";

export default function Home() {
  const [Store] = useContext(StoreContext);
  const askProductPopup = Store.askProductPopup;

  const userRole = "businfess";
  return (
    <>
      <Head>
        <title>OTP | Arclif</title>
        <meta name="description" content="Get suitable construction materials fro your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          {userRole == "general" ? <Header /> : userRole == "business" ? <HeaderOne /> : <HeaderNotLogged />}
          <div className={styles.main_inner}>
            <OtpMain />
          </div>
          <Help />
          <Footer />
        </div>
        {askProductPopup ? <AskProductPopUp /> : ""}
      </main>
    </>
  );
}
