/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect, useContext } from "react";
import { StoreContext } from "@/global/StoreContext";
import { useRouter } from "next/router";
import backend from "@/global/backend";

import styles from "./Home.module.css";

const SectionTwo = (props) => {
  const router = useRouter();
  const [Store] = useContext(StoreContext);

  const [products, setproducts] = useState([]);
  async function getProductsFn() {
    const ApiResponse = await fetch(`${backend}/product/catelogOrSubcatelog/${props.items._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await ApiResponse.json();
    setproducts(res?.products);
  }

  useEffect(() => {
    getProductsFn();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <>
          <div className={styles.sectionTwo}>
            <div className={styles.sectionTwo_header}>
              <h3>{props.items.category_name}</h3>
              <div className={styles.showAll_button} onClick={() => router.push(`/category/${props.items._id}`)}>
                Show all
                <img src="/icon/arrowRight.svg" alt="" />
              </div>
            </div>
            <div className={styles.sectionTwo_cards}>
              <img src="/img/home/ad1.png" alt="" />
              <div className={styles.cardsContainer}>
                <>
                  {products.map((items, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className={styles.card_product} onClick={() => router.push(`/product/${items._id}`)}>
                          <img src="/icon/addFav.svg" alt="" />
                          <div className={styles.productImage}>
                            <img
                              src={items?.thumbnail}
                              alt="products"
                              onError={(e) => (e.target.src = "/img/common/ina.svg")}
                            />
                          </div>
                          <div className={styles.product_details}>
                            <p>{items?.name}</p>
                            <div className={styles.priceContainer}>
                              {items.discount_rate ? (
                                <>
                                  <h5>₹{Math.trunc(items.mrp - (items.mrp * items.discount_rate) / 100)}</h5>
                                  <p>₹{items.mrp}</p>
                                  <span>{items.discount_rate}% off</span>
                                </>
                              ) : (
                                <h5>₹{items.mrp}</h5>
                              )}
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SectionTwo;
