/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";
import backend from "@/global/backend";
import CategoryPageSingleMain from "./categorySingle";

import styles from "./index.module.css";

export default function CategoryPageMain() {
  const router = useRouter();
  const { id } = router.query;
  const [Store] = useContext(StoreContext);

  /* GET Category ID */
  const [categoryId, setCategoryId] = useState("");
  function getParameters() {
    let urlString = window.location.href;
    let paramString = urlString.split("/")[4];
    let queryString = new URLSearchParams(paramString);
    for (let pair of queryString.entries()) {
      setCategoryId(pair[0]);
    }
  }
  useEffect(() => {
    getParameters();
  }, [id]);
  useEffect(() => {
    if (id !== null) {
      setCategoryId(id);
    } else {
      getParameters();
    }
  }, []);

  const [subCategories, setSubCategory] = useState([]);
  async function getAllSubCategoryFn() {
    const ApiResponse = await fetch(`${backend}/admin/product/sub_category/${categoryId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res = await ApiResponse.json();
    setSubCategory(res?.subcategories);
  }
  useEffect(() => {
    if (categoryId) {
      getAllSubCategoryFn();
    }
  }, [categoryId]);

  // console.log(subCategories);

  return (
    <>
      <div className={styles.secOne}>
        {subCategories.length > 0 ? (
          <>
            <div className={styles.pageTitle}>Products under {subCategories[0].category_id.category_name}</div>
            {subCategories.map((items, index) => {
              return (
                <React.Fragment key={index}>
                  <CategoryPageSingleMain subCatId={items} />
                </React.Fragment>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
