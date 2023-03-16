/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";
import backend from "@/global/backend";

import styles from "./index.module.css";

export default function CategoryPageSingleMain({ subCatId }) {
  const router = useRouter();
  const [Store] = useContext(StoreContext);

  const [subCategoryProducts, setSubCategoryProducts] = useState([]);
  async function getAllRequestsprodFn() {
    const ApiResponse = await fetch(`${backend}/product/catelogOrSubcatelog/${subCatId._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await ApiResponse.json();
    // console.log(data);
    if (data.status === 200) {
      setSubCategoryProducts(data?.products);
    }
  }
  useEffect(() => {
    if (subCatId) {
      getAllRequestsprodFn();
    }
  }, [subCatId]);
  //   console.log(subCategoryProducts);

  return (
    <div className={styles.secOneInner}>
      {subCategoryProducts?.length !== 0 ? (
        <>
          <div className={styles.pagesubTitle}>{subCategoryProducts[0].subcategory_id.subCategory_name}</div>
          <div className={styles.product_card_container}>
            {subCategoryProducts?.map((item, index) => {
              return (
                <div className={styles.card_product} key={index}>
                  <img src="/icon/addFav.svg" alt="" />
                  <div className={styles.productImage}>
                    <img src={item?.thumbnail} alt="" />
                  </div>
                  <div className={styles.product_details}>
                    <p>{item?.name}</p>
                    <div className={styles.priceContainer}>
                      <h5>₹{Math.trunc(item.mrp - (item.mrp * item.discount_rate) / 100)}</h5>
                      <p>₹{item.mrp}</p>
                      <span>{item.discount_rate}% off</span>
                    </div>
                    <div className={styles.buyNow_button}>Buy now</div>
                    <div className={styles.addToCart_button}>Add to cart</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
