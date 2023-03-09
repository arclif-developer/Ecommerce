import Head from "next/head";
import Footer from "@/src/components/common/Footer";
import HeaderSearch from "@/src/components/search/HeaderSearch";
import { useContext } from "react";
import { StoreContext } from "@/global/StoreContext";
import AskProductPopUp from "@/src/components/common/askProduct-popup";
import SearchPage from "@/src/components/SearchPage";

import styles from "../styles/search.module.css";

export default function Search() {
  const [Store] = useContext(StoreContext);
  const askProductPopup = Store.askProductPopup;

  return (
    <>
      <Head>
        <title>Search | Arclif</title>
        <meta name="description" content="Get suitable construction materials fro your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <HeaderSearch />
          <div className={styles.main_inner}>
            <SearchPage />
          </div>
          <Footer />
        </div>
        {askProductPopup ? <AskProductPopUp /> : ""}
      </main>
    </>
  );
}
