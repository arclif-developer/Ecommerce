import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import AddProductMain from "@/src/components/add-product";
import Head from "next/head";

import styles from "./index.module.css";

export default function AddProductPage() {
  return (
    <>
      <Head>
        <title>Add Product | Arclif</title>
        <meta name="description" content="Add product for your business" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <Header />
          <div className={styles.main_inner}>
            <AddProductMain />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
