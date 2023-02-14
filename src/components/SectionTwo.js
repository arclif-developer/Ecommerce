/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Home.module.css";
import { useRouter } from "next/router";

const SectionTwo = () => {
  const router = useRouter();

  const gotoProductView = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className={styles.sectionTwo}>
      <div className={styles.sectionTwo_header}>
        <h3>Living Room Furniture</h3>
        <div className={styles.showAll_button}>
          Show all
          <img src="/icon/arrowRight.svg" alt="" />
        </div>
      </div>
      <div className={styles.sectionTwo_cards}>
        <img src="/img/home/ad1.png" alt="" />
        <div className={styles.cardsContainer}>
          <div className={styles.card_product} onClick={() => gotoProductView("12345")}>
            <img src="/icon/addFav.svg" alt="" />
            <div className={styles.productImage}>
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className={styles.product_details}>
              <p>Monte Contemporary Dining Chair With Black Powder Coated Metal Legs, Gray</p>
              <div className={styles.priceContainer}>
                <h5>₹349</h5>
                <p>₹1,499</p>
                <span>76% off</span>
              </div>
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
              <p>Monte Contemporary Dining Chair With Black Powder Coated Metal Legs, Gray</p>
              <div className={styles.priceContainer}>
                <h5>₹349</h5>
                <p>₹1,499</p>
                <span>76% off</span>
              </div>
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
              <p>Monte Contemporary Dining Chair With Black Powder Coated Metal Legs, Gray</p>
              <div className={styles.priceContainer}>
                <h5>₹349</h5>
                <p>₹1,499</p>
                <span>76% off</span>
              </div>
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
              <p>Monte Contemporary Dining Chair With Black Powder Coated Metal Legs, Gray</p>
              <div className={styles.priceContainer}>
                <h5>₹349</h5>
                <p>₹1,499</p>
                <span>76% off</span>
              </div>
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
              <p>Monte Contemporary Dining Chair With Black Powder Coated Metal Legs, Gray</p>
              <div className={styles.priceContainer}>
                <h5>₹349</h5>
                <p>₹1,499</p>
                <span>76% off</span>
              </div>
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
              <p>Monte Contemporary Dining Chair With Black Powder Coated Metal Legs, Gray</p>
              <div className={styles.priceContainer}>
                <h5>₹349</h5>
                <p>₹1,499</p>
                <span>76% off</span>
              </div>
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
              <p>Monte Contemporary Dining Chair With Black Powder Coated Metal Legs, Gray</p>
              <div className={styles.priceContainer}>
                <h5>₹349</h5>
                <p>₹1,499</p>
                <span>76% off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
