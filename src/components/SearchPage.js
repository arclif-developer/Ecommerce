/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import backend from "@/global/backend";
import { StoreContext } from "@/global/StoreContext";
import React, { useContext, useEffect, useState } from "react";
import styles from "./SearchPage.module.css";

const SearchPage = () => {
  const [Store] = useContext(StoreContext);
  const searchQuery = Store.searchQuery;

  const [dataSort, setDataSort] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortname, setSortName] = useState("");

  async function getSearchResults() {
    const response = await fetch(`${backend}/product/search/${searchQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    if (data.status === 200) {
      setDataSort(data.products);
      setProducts(data.products);
    }
  }

  useEffect(() => {
    getSearchResults(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (dataSort.length !== 0) {
      let sortedByPrice = dataSort.sort(function (a, b) {
        return a.mrp - b.mrp;
      });

      if (sortname === "highestPrised") {
        var result = sortedByPrice.slice(0).reverse();
        setProducts(result);
      }
      if (sortname === "lowestPrised") {
        setProducts(sortedByPrice);
      }
      if (sortname === "newest") {
        var result = products.slice(0).reverse();
        setProducts(result);
      }
    }
  }, [sortname]);

  return (
    <div className={styles.search_outer}>
      <div className={styles.search_inner}>
        {products.length !== 0 ? (
          <>
            <div className={styles.search_left}>
              <h4>Sort by</h4>
              <div className={styles.sort_item_container}>
                {/* <div className={styles.sort_item}>
                  <input type="radio" name="sort" />
                  <p>Relevance</p>
                </div> */}
                <div className={styles.sort_item}>
                  <input type="radio" name="sort" onClick={() => setSortName("highestPrised")} />
                  <p>Highest Priced First</p>
                </div>
                <div className={styles.sort_item}>
                  <input type="radio" name="sort" onClick={() => setSortName("lowestPrised")} />
                  <p>Lowest Priced First</p>
                </div>
                {/* <div className={styles.sort_item}>
                  <input type="radio" name="sort" />
                  <p>Fastest Shipping</p>
                </div> */}
                <div className={styles.sort_item}>
                  <input type="radio" name="sort" />
                  <p>Newest</p>
                </div>
              </div>
              <h5>Brand</h5>
              <div className={styles.brand_item_container}>
                <div className={styles.brand_item}>
                  <input type="checkbox" name="brand" />
                  <p>Status (4)</p>
                </div>
                <div className={styles.brand_item}>
                  <input type="checkbox" name="brand" />
                  <p>India Circus by Krsnaa Mehta (4)</p>
                </div>
                <div className={styles.brand_item}>
                  <input type="checkbox" name="brand" />
                  <p>India Circus by Krsnaa Mehta (4)</p>
                </div>
                <div className={styles.brand_item}>
                  <input type="checkbox" name="brand" />
                  <p>QAALEEN (11)</p>
                </div>

                <div className={styles.brand_item}>
                  <input type="checkbox" name="brand" />
                  <p>Imperial Knots (11)</p>
                </div>
                <div className={styles.brand_item}>
                  <input type="checkbox" name="brand" />
                  <p>India Circus(4)</p>
                </div>
                <div className={styles.brand_item}>
                  <input type="checkbox" name="brand" />
                  <p>Jaipur Rugs (5)</p>
                </div>
                <div className={styles.brand_item}>
                  <input type="checkbox" name="brand" />
                  <p>QAALEEN (11)</p>
                </div>
                <div className={styles.brand_item}>
                  <input type="checkbox" name="brand" />
                  <p>Imperial Knots (11)</p>
                </div>
              </div>
            </div>
            <div className={styles.search_right}>
              <div className={styles.product_card_container}>
                {products.map((item, index) => {
                  return (
                    <div className={styles.card_product} key={index}>
                      <img src="/icon/addFav.svg" alt="" />
                      <div className={styles.productImage}>
                        <img src={item?.thumbnail} alt="" />
                      </div>
                      <div className={styles.product_details}>
                        <p>{item?.name}</p>
                        {/* <h4>By Furniture Global</h4> */}
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
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SearchPage;
