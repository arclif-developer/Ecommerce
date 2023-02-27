import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import SingleProductView from "@/src/components/product/SingleProductView";
import Head from "next/head";

import styles from "./product-single.module.css";

export default function SingleProduct() {
  return (
    <>
      <Head>
        <title>Product Name | Arclif</title>
        <meta name="description" content="Get suitable construction materials fro your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <Header />
          <div className={styles.main_inner}>
            <SingleProductView />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
