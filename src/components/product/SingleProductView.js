/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./SingleProductView.module.css";
import { useRouter } from "next/router";
var Api_url = "https://agriha-backend.onrender.com";

const SingleProductView = () => {
  const router = useRouter();
  const { index } = router.query;
  const [productDetail, setProductDetail] = useState();
  async function getProductDetailFn(id) {
    const ApiResponse = await fetch(`${Api_url}/product/details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await ApiResponse.json();
    setProductDetail(res?.productDta);
  }
  useEffect(() => {
    if (index) {
      getProductDetailFn(index);
    }
  }, [index]);
  return (
    <>
      {productDetail ? (
        <>
          <div className={styles.singleProductView}>
            <div className={styles.single_top}>
              <div className={styles.single_top_image_container}>
                <div className={styles.single_top_left}>
                  {productDetail?.image?.map((items, index) => {
                    return (
                      <>
                        <img src={items} alt="" onError={(e) => (e.target.src = "/img/common/ina.svg")} />
                      </>
                    );
                  })}
                </div>
                <div className={styles.single_top_center}>
                  <img src={productDetail?.thumbnail} alt="" onError={(e) => (e.target.src = "/img/common/ina.svg")} />
                  <div className={styles.saveButtonMobile}>
                    <img src="/icon/save.svg" alt="" />
                    Save
                  </div>
                </div>
              </div>
              <div className={styles.single_top_right}>
                <h5>{productDetail.name}</h5>
                <span>By {productDetail.brand}</span>
                <div className={styles.priceProduct_container}>
                  <div className={styles.price_product}>
                    {productDetail.discount_rate ? (
                      <>
                        <h5>
                          ₹{Math.trunc(productDetail.mrp - (productDetail.mrp * productDetail.discount_rate) / 100)}
                        </h5>
                        <p>₹{productDetail.mrp}</p>
                        <span>{productDetail.discount_rate}% off</span>
                      </>
                    ) : (
                      <h5>₹{productDetail.mrp}</h5>
                    )}
                  </div>
                  <div className={styles.quantity}>
                    Qty
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                    <img src="/icon/arrowDown.svg" alt="" />
                  </div>
                </div>
                <p>Save ₹ 4,851 MRP ₹ 17,100 (Inc of all taxes)</p>
                <div className={styles.ratings}></div>
                <div className={styles.ship_date}>Ship within 2 days</div>
                <div className={styles.pincodeCheck}>
                  <input placeholder="Enter the pincode" type="tel" />
                  <div className={styles.checkButton}>Check</div>
                </div>
                <div className={styles.pincodeEnter}>
                  <img src="/icon/delivery.svg" alt="" />
                  Please enter pin code to check home delivery availability.
                </div>
                <div className={styles.button_container}>
                  <div className={styles.addtocart_button}>Add to cart</div>
                  <div className={styles.buynow_button}>Buy now</div>
                  <div className={styles.saveButton}>
                    <img src="/icon/save.svg" alt="" />
                    Save
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.single_center}>
              <div className={styles.single_center_title}>
                <h3>More details</h3>
              </div>
              <div className={styles.single_center_nav}>
                <nav>
                  <ul>
                    <li>Overview</li>
                    <li>Details</li>
                    <li>Merchant Info</li>
                    <li>Returns & Cancellations</li>
                  </ul>
                </nav>
              </div>
              <p>
                Whether you need a chair for your gaming station or your study spot, a gaming chair is a fantastic
                choice. Ergonomic and comfortable, our gaming chairs come in different styles too.Your gaming desk is
                somewhere you will spend long hours, so it’s important to get the comfort, ergonomics and functionality
                you need. And of course, the right extras can also help make things more enjoyable.
              </p>
            </div>
            <div className={styles.single_bottom}>
              <div className={styles.single_bottom_title}>
                <h3>Similar products</h3>
              </div>
              <div className={styles.single_bottom_products}>
                <img src="http://sc04.alicdn.com/kf/H2949a021ace94a4cb1878de02cb32168H.jpg" alt="" />
                <img src="http://sc04.alicdn.com/kf/H2949a021ace94a4cb1878de02cb32168H.jpg" alt="" />
                <img src="http://sc04.alicdn.com/kf/H2949a021ace94a4cb1878de02cb32168H.jpg" alt="" />
                <img src="http://sc04.alicdn.com/kf/H2949a021ace94a4cb1878de02cb32168H.jpg" alt="" />
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

export default SingleProductView;
