import React from "react";
import styles from "./SearchPage.module.css";

const SearchPage = () => {
  return (
    <div className={styles.search_outer}>
      <div className={styles.search_inner}>
        <div className={styles.search_left}>
          <h4>Sort by</h4>
          <div className={styles.sort_item_container}>
            <div className={styles.sort_item}>
              <input type="radio" name="sort" />
              <p>Relevance</p>
            </div>
            <div className={styles.sort_item}>
              <input type="radio" name="sort" />
              <p>Highest Priced First</p>
            </div>
            <div className={styles.sort_item}>
              <input type="radio" name="sort" />
              <p>Lowest Priced First</p>
            </div>
            <div className={styles.sort_item}>
              <input type="radio" name="sort" />
              <p>Fastest Shipping</p>
            </div>
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
            <div className={styles.card_product}>
              <img src="/icon/addFav.svg" alt="" />
              <div className={styles.productImage}>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div className={styles.product_details}>
                <p>
                  Monte Contemporary Dining Chair With Black Powder Coated...
                </p>
                <h4>By Furniture Global</h4>
                <div className={styles.priceContainer}>
                  <h5>₹349</h5>
                  <p>₹1,499</p>
                  <span>76% off</span>
                </div>
                <div className={styles.buyNow_button}>Buy now</div>
                <div className={styles.addToCart_button}>Add to cart</div>
              </div>
            </div>
            <div className={styles.card_product}>
              <img src="/icon/addFav.svg" alt="" />
              <div className={styles.productImage}>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div className={styles.product_details}>
                <p>
                  Monte Contemporary Dining Chair With Black Powder Coated...
                </p>
                <h4>By Furniture Global</h4>
                <div className={styles.priceContainer}>
                  <h5>₹349</h5>
                  <p>₹1,499</p>
                  <span>76% off</span>
                </div>
                <div className={styles.buyNow_button}>Buy now</div>
                <div className={styles.addToCart_button}>Add to cart</div>
              </div>
            </div>
            <div className={styles.card_product}>
              <img src="/icon/addFav.svg" alt="" />
              <div className={styles.productImage}>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div className={styles.product_details}>
                <p>
                  Monte Contemporary Dining Chair With Black Powder Coated...
                </p>
                <h4>By Furniture Global</h4>
                <div className={styles.priceContainer}>
                  <h5>₹349</h5>
                  <p>₹1,499</p>
                  <span>76% off</span>
                </div>
                <div className={styles.buyNow_button}>Buy now</div>
                <div className={styles.addToCart_button}>Add to cart</div>
              </div>
            </div>
            <div className={styles.card_product}>
              <img src="/icon/addFav.svg" alt="" />
              <div className={styles.productImage}>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div className={styles.product_details}>
                <p>
                  Monte Contemporary Dining Chair With Black Powder Coated...
                </p>
                <h4>By Furniture Global</h4>
                <div className={styles.priceContainer}>
                  <h5>₹349</h5>
                  <p>₹1,499</p>
                  <span>76% off</span>
                </div>
                <div className={styles.buyNow_button}>Buy now</div>
                <div className={styles.addToCart_button}>Add to cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
