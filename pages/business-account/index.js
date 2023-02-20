import Footer from "@/src/components/common/Footer";
import HeaderOne from "@/src/components/common/Header1";
import BusinessAccountMain from "@/src/components/business-account";
import Head from "next/head";

import styles from "./index.module.css";

export default function BusinessAccountPage() {
  return (
    <>
      <Head>
        <title>Business Account | Arclif</title>
        <meta name="description" content="Business Account for your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <HeaderOne />
          <div className={styles.main_inner}>
            <BusinessAccountMain />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
