/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import styles from "./SingleProductView.module.css";
import { useRouter } from "next/router";

import backend from "@/global/backend";
import { StoreContext } from "@/global/StoreContext";

const SingleProductView = () => {
  const router = useRouter();
  const [Store] = useContext(StoreContext);
  const userId = Store.userId;
  const setUserId = Store.setUserId;
  const { index } = router.query;

  // STATES
  const [productDetail, setProductDetail] = useState();
  const [image, setImages] = useState();
  const [quantity, setQuantity] = useState(1);
  const [token, setToken] = useState();
  const [auth, setAuth] = useState(true);
  // const [userId, setUserId] = useState();
  const [Iscart, setIscart] = useState(false);

  // PRODUCTS DETAILS GET API CALLING FUNCTION
  async function getProductDetailFn(id) {
    console.log(userId);
    const ApiResponse = await fetch(`${backend}/product/details/${id}?user_id=${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res = await ApiResponse.json();
    console.log(res);
    setProductDetail(res?.productDta);
    setIscart(res?.cart);
    setImages(res?.productDta?.thumbnail);
  }

  const handleImages = (images) => {
    setImages(images);
  };

  const handleQuantity = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "") {
      setQuantity(parseInt(e.target.value));
    } else {
      setQuantity(parseInt(1));
    }
  };

  const handleAddToCart = async () => {
    if (userId && token) {
      const ApiRes = await fetch(`${backend}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id: productDetail._id,
          quantity: quantity,
        }),
      });
      const res = await ApiRes.json();
      if (res.status === 200) {
        setIscart(true);
      } else {
        alert("Something went wrong. Please try again");
      }
    } else {
      router.push(`/login`);
    }
  };

  useEffect(() => {
    if (!userId || (!token && auth)) {
      console.log("store user not found");
      let token = localStorage.getItem("token");
      let id = localStorage.getItem("Id");
      if (token && id) {
        setToken(token);
        setUserId(id);
      } else {
        setAuth(false);
      }
    }
    if (index) {
      getProductDetailFn(index);
    }
  }, [index, userId]);
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
                      <React.Fragment key={index}>
                        <img
                          src={items}
                          alt=""
                          onError={(e) => (e.target.src = "/img/common/ina.svg")}
                          onClick={() => handleImages(items)}
                        />
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className={styles.single_top_center}>
                  <img src={image} alt="" onError={(e) => (e.target.src = "/img/common/ina.svg")} />
                  <div className={styles.saveButtonMobile}>
                    <img src="/icon/save.svg" alt="" />
                    Save
                  </div>
                </div>
              </div>
              <div className={styles.single_top_right}>
                <h5>{productDetail.name}</h5>
                {productDetail?.seller ? (
                  <>
                    <span>By {productDetail.seller}</span>
                  </>
                ) : (
                  <>
                    <span>By direct seller</span>
                  </>
                )}

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
                    <input type="number" onChange={handleQuantity} defaultValue={quantity} />
                    <span>{productDetail.unit}</span>
                    {/* <select onChange={handleQuantity}>
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
                    </select> */}
                    {/* <img src="/icon/arrowDown.svg" alt="" /> */}
                  </div>
                </div>
                <p>
                  Save ₹
                  {quantity * productDetail.mrp -
                    quantity *
                      Math.trunc(productDetail.mrp - (productDetail.mrp * productDetail.discount_rate) / 100)}{" "}
                  from MRP ₹{quantity * productDetail.mrp} (Inc of all taxes)
                </p>
                <div className={styles.ratings}></div>
                <div className={styles.ship_date}>For immediate delivery, Contact us.</div>
                <div className={styles.pincodeCheck}>
                  <input placeholder="Enter the pincode" type="tel" />
                  <div className={styles.checkButton}>Check</div>
                </div>
                <div className={styles.pincodeEnter}>
                  <img src="/icon/delivery.svg" alt="" />
                  Please enter pin code to check home delivery availability.
                </div>
                <div className={styles.button_container}>
                  {Iscart === true ? (
                    <>
                      <div className={styles.addtocart_button} onClick={() => router.push("/cart")}>
                        Go to cart
                      </div>
                    </>
                  ) : (
                    <div className={styles.addtocart_button} onClick={handleAddToCart}>
                      Add to cart
                    </div>
                  )}

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
