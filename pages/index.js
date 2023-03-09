import Head from "next/head";
import { useContext, useEffect } from "react";
import { StoreContext } from "@/global/StoreContext";
import Header from "../src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import HomePage from "../src/components/Home";
import Help from "@/src/components/home/Help";
import AskProductPopUp from "@/src/components/common/askProduct-popup";

import styles from "../styles/index.module.css";

export default function Home() {
  const [Store] = useContext(StoreContext);
  const askProductPopup = Store.askProductPopup;

  // const [userDetails, setUserDetails] = useState([]);
  // async function getUserDetails() {
  //   const generalToken = localStorage.getItem("generalToken");
  //   const businessToken = localStorage.getItem("businessToken");
  //   if (generalToken !== "") {
  //     const res = await fetch(`${api_url}/user/profile`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //"Access-Control-Allow-Origin": "*",
  //         Authorization: `Bearer ${generalToken}`,
  //       },
  //     });
  //     const data = await res.json();
  //     // console.log(data);
  //     setUserDetails(data.userData);
  //   }
  //   if (businessToken !== "") {
  //     const res = await fetch(`${api_url}/user/profile`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //"Access-Control-Allow-Origin": "*",
  //         Authorization: `Bearer ${businessToken}`,
  //       },
  //     });
  //     const data = await res.json();
  //     // console.log(data);
  //     setUserDetails(data.userData);
  //   }
  // }

  // useEffect(() => {
  //   getUserDetails();
  // }, []);
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
