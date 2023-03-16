import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";
import backend from "@/global/backend";
import Head from "next/head";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import CategoryPageMain from "@/src/components/category";

import styles from "./index.module.css";

const OrderListPage = (props) => {
  const name = props.data.subcategories[0].category_id.category_name;
  return (
    <>
      <Head>
        <title>{name} | Arclif</title>
        <meta name="description" content={`${name} for your projects.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main_outer}>
        <div className={styles.main_outer_cover}>
          <Header />
          <div className={styles.main_inner}>
            <CategoryPageMain />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  // Fetch data from external API
  const res = await fetch(`${backend}/admin/product/sub_category/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await res.json();

  return { props: { data } };
}

export default OrderListPage;
