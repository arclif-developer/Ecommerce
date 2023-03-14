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

  const [allbrands, setAllBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  async function getBrandLists() {
    const response = await fetch(`${backend}/product/brand_list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
    if (data.status === 200) {
      setAllBrands(data.brands);
    }
  }

  const [categories, setCategory] = useState([]);
  async function getAllCategoryFn() {
    const AprResponse = await fetch(`${backend}/admin/product/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res = await AprResponse.json();
    setCategory(res?.category);
  }

  useEffect(() => {
    getBrandLists();
    getAllCategoryFn();
  }, []);

  async function getSearchResults() {
    const response = await fetch(`${backend}/product/search/${searchQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
    if (data.status === 200) {
      setDataSort(data.products);
      setProducts(data.products);
    }
  }

  useEffect(() => {
    getSearchResults(searchQuery);
  }, [searchQuery]);

  // console.log(searchQuery);

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
      // if (sortname === "newest") {
      //   let sortedBydate = dataSort.sort(function (a, b) {
      //     return new Date(a.createdAt) - new Date(b.createdAt);
      //   });
      //   setProducts(sortedBydate);
      // }
    }
  }, [sortname]);

  const handleCategoryClick = (category) => {
    // If the category is already selected, remove it from the array
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((b) => b !== category));
    }
    // If the category is not selected, add it to the array
    else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const handleBrandClick = (brand) => {
    // If the brand is already selected, remove it from the array
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    }
    // If the brand is not selected, add it to the array
    else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  useEffect(() => {
    // console.log(dataSort);
    let result = dataSort.filter((product) => selectedCategories.includes(product?.category_id?.category_name));
    setProducts(result);
  }, [selectedCategories]);

  useEffect(() => {
    let result = dataSort.filter((product) => selectedBrands.includes(product?.brand));
    setProducts(result);
  }, [selectedBrands]);

  return (
    <div className={styles.search_outer}>
      <div className={styles.search_inner}>
        <div className={styles.search_left}>
          <h4>Sort by</h4>
          <div className={styles.sort_item_container}>
            {/* <div className={styles.sort_item}>
                  <input type="radio" name="sort" />
                  <p>Relevance</p>
                </div> */}
            <div className={styles.sort_item}>
              <input id="highestPrised" type="radio" name="sort" onClick={() => setSortName("highestPrised")} />
              <label htmlFor="highestPrised">Highest Priced First</label>
            </div>
            <div className={styles.sort_item}>
              <input id="lowestPrised" type="radio" name="sort" onClick={() => setSortName("lowestPrised")} />
              <label htmlFor="lowestPrised">Lowest Priced First</label>
            </div>
            {/* <div className={styles.sort_item}>
                  <input type="radio" name="sort" />
                  <p>Fastest Shipping</p>
                </div> */}
            {/* <div className={styles.sort_item}>
                  <input type="radio" name="sort" />
                  <p>Newest</p>
                </div> */}
          </div>
          <h5>Category</h5>
          <div className={styles.brand_item_container}>
            {categories.map((item, index) => {
              // console.log(item);
              return (
                <div className={styles.brand_item} key={index}>
                  <input
                    type="checkbox"
                    name="category"
                    id={item.category_name}
                    value={item.category_name}
                    onClick={() => handleCategoryClick(item.category_name)}
                  />
                  <label htmlFor={item.category_name}>{item.category_name}</label>
                </div>
              );
            })}
          </div>
          <h5>Brand</h5>
          <div className={styles.brand_item_container}>
            {allbrands.map((item, index) => {
              return (
                <div className={styles.brand_item} key={index}>
                  <input
                    type="checkbox"
                    name="brand"
                    id={item.brand}
                    value={item.brand}
                    onClick={() => handleBrandClick(item.brand)}
                  />
                  <label htmlFor={item.brand}>{item.brand}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.search_right}>
          {/* <div className={styles.filter_mobile_container}>
            <img src="/icon/filterIcon.svg" alt="" />
            Product filter
          </div> */}
          {products.length !== 0 ? (
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
          ) : (
            <div className={styles.no_search_result}>
              <img src="/img/search/no_search.svg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
