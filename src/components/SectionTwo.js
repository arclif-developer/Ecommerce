/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useRouter } from "next/router";
var Api_url = "https://agriha-backend-6e2r.onrender.com";

const SectionTwo = (props) => {
  const [products, setproducts] = useState([]);
  const router = useRouter();

  const gotoProductView = (id) => {
    router.push(`/product/${id}`);
  };

  async function getProductsFn() {
    const ApiResponse = await fetch(`${Api_url}/product/catelogOrSubcatelog/${props.items._id}`, {
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
              <div className={styles.showAll_button}>
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
                        <div className={styles.card_product} onClick={() => gotoProductView(items._id)}>
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
