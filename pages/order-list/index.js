import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import OrderListMain from "@/src/components/order-list";
import Head from "next/head";

import styles from "./index.module.css";

export default function OrderListPage() {
  return (
    <>
      <Head>
        <title>Order List | Arclif</title>
        <meta name="description" content="Order list for your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <Header />
          <div className={styles.main_inner}>
            <OrderListMain />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
