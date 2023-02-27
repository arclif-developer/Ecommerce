/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";
var Api_url = "https://agriha-backend.onrender.com";
import moment from "moment";

export default function BusinessAccountMain() {
  const [section, setSection] = useState("profile");
  const [orderHistory, setOrderHistory] = useState([]);
  const [sellingProducts, setSellingProducts] = useState([]);
  const imgurl = "#";

  var token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGI2YzNhM2U5OTk2ZWViNjBkNjg1MiIsImlhdCI6MTY3NzA0ODU2MSwiZXhwIjoxNjc5NTU0MTYxfQ.BN72_j8Yux8DdRkMd7v7vJzSGT1U_AdSG6qIhW9eVL0";
  async function getOrderHistory() {
    const ApiResponse = await fetch(`${Api_url}/order/delivered_orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const resp = await ApiResponse.json();
    if (resp.status === 200) {
      setOrderHistory(resp?.orderHistory);
    }
  }

  async function getSellerProducts() {
    const ApiResponse = await fetch(`${Api_url}/product/sellersProducts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await ApiResponse.json();
    if (response.status === 200) {
      setSellingProducts(response.sellerProducts);
    }
  }

  useEffect(() => {
    getOrderHistory();
    getSellerProducts();
  }, []);
  console.log(orderHistory);
  return (
    <>
      <div className={styles.secOne}>
        <h1>Account details</h1>
        <div className={styles.secOneInner}>
          <div className={styles.section_buttons}>
            <div onClick={() => setSection("profile")} className={section === "profile" ? styles.active : ""}>
              Account profile
            </div>
            <div onClick={() => setSection("history")} className={section === "history" ? styles.active : ""}>
              Order history
            </div>
            <div onClick={() => setSection("sell")} className={section === "sell" ? styles.active : ""}>
              Sell products list
            </div>
          </div>

          <div className={styles.section_outer}>
            {section === "profile" ? (
              <div className={styles.profile_outer}>
                <div className={styles.profile_image}>
                  {imgurl !== "#" ? (
                    <img
                      src="/img/common/ni.svg"
                      onError={(e) => (e.target.src = "/img/common/ina.svg")}
                      alt="Product Image"
                    />
                  ) : (
                    <div>
                      D<span>.</span>
                    </div>
                  )}
                  <span>Change profile</span>
                </div>
                <div className={styles.profile_details}>
                  <div>
                    <label for="company_name">Company name</label>
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      defaultValue="Current Company name"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label for="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      defaultValue="users Current location"
                      placeholder="Location"
                    />
                  </div>
                  <div>
                    <label for="company_address">Company Address</label>
                    <textarea
                      type="text"
                      id="company_address"
                      name="company_address"
                      defaultValue="Current Company Address"
                      placeholder="Company Address"
                    ></textarea>
                  </div>
                  <div>
                    <label for="district">District</label>
                    <input
                      type="text"
                      id="district"
                      name="district"
                      defaultValue="user Current District"
                      placeholder="District"
                    />
                  </div>

                  <div className={styles.SpTwo}>
                    <div>
                      <label for="contact_number">Contact Number</label>
                      <input
                        type="text"
                        id="contact_number"
                        name="contact_number"
                        defaultValue="Current Contact Number"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div>
                      <label for="contact_mail">Contact Mail</label>
                      <input
                        type="text"
                        id="contact_mail"
                        name="contact_mail"
                        defaultValue="Current Contact Mail"
                        placeholder="Contact Mail"
                      />
                    </div>
                  </div>
                  <div className={styles.saveOuter}>
                    <a className={styles.discard}>Discard</a>
                    <a className={styles.save}>Save & Change</a>
                  </div>
                </div>
              </div>
            ) : section === "history" ? (
              <div className={styles.max_history_outer}>
                {orderHistory.map((items, i) => (
                  <>
                    {items.products.map((products, index) => {
                      return (
                        <>
                          {products?.delivery_status === "DELIVERED" ? (
                            <>
                              <div className={styles.history_outer}>
                                <div className={styles.his_outer}>
                                  <img
                                    className={styles.product}
                                    src={products?.productId?.thumbnail}
                                    onError={(e) => (e.target.src = "/img/common/ina.svg")}
                                    alt="Product Image"
                                  />
                                  <div className={styles.Two}>
                                    <div className={styles.TwoOne}>
                                      <h4>₹{products?.productId?.mrp}</h4>
                                      <p>{products?.productId?.name}</p>
                                    </div>
                                    <div className={styles.TwoTwo}>
                                      <div className={styles.TwoTwoOne}>
                                        <img src="/icon/address.png" alt="Address" />
                                        <span>Delivery address:</span>
                                      </div>
                                      <div className={styles.TwoTwoTwo}>
                                        <p>
                                          {items.address_id.address}, {items.address_id.city}, {items.address_id.state},{" "}
                                          {items.address_id.pincode}
                                        </p>
                                        {items.address_id.phone ? (
                                          <p>Mobile Number: +91 {items.address_id.phone}</p>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.Three}>
                                    <div className={styles.ThreeOne}>
                                      <div>
                                        <span>Order date : </span>
                                        <span>{moment(items?.createdAt).format("lll")}</span>
                                      </div>
                                      <div>
                                        <span>Delivery date : </span>
                                        <span>{moment(items?.updatedAt).format("lll")}</span>
                                      </div>
                                      <div>
                                        <span>Customer received : </span>
                                        <span>{moment(items?.updatedAt).format("lll")}</span>
                                      </div>
                                      <div>
                                        <span>Payment method : </span>
                                        <span style={{ textTransform: "uppercase" }}>{items?.payment_method}</span>
                                      </div>
                                    </div>
                                    <div className={styles.ThreeTwo}>
                                      <a>Help me </a>
                                      <a>View product</a>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.mobile}>
                                  <div className={styles.TwoTwo}>
                                    <div className={styles.TwoTwoOne}>
                                      <img src="/icon/address.png" alt="Address" />
                                      <span>Delivery address:</span>
                                    </div>
                                    <div className={styles.TwoTwoTwo}>
                                      <p>686 Great South Road, Manukau, Saules ilea 7 - 16, Cosi</p>
                                      <p>Mobile Number: +91 2543 211 212</p>
                                    </div>
                                    <div className={styles.produc}>View product</div>
                                  </div>
                                  <div className={styles.Three}>
                                    <div className={styles.ThreeOne}>
                                      <div>
                                        <span>Order date : </span>
                                        <span>20-10-2023</span>
                                      </div>
                                      <div>
                                        <span>Delivery date : </span>
                                        <span>20-10-2023</span>
                                      </div>
                                      <div>
                                        <span>Customer received : </span>
                                        <span>20-10-2023</span>
                                      </div>
                                      <div>
                                        <span>Payment method : </span>
                                        <span>Cash on delivery</span>
                                      </div>
                                    </div>
                                    <div className={styles.ThreeTwo}>
                                      <a>Help me </a>
                                      <a>View product</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                ))}
              </div>
            ) : section === "sell" ? (
              <div className={styles.sell_max_outer}>
                {Array.apply(null, { length: 5 }).map((e, i) => (
                  <div className={styles.sell_outer}>
                    <img
                      className={styles.product}
                      src="/img/common/ni.svg"
                      onError={(e) => (e.target.src = "/img/common/ina.svg")}
                      alt="Product Image"
                    />
                    <div className={styles.SellTwo}>
                      <div className={styles.SellTwoOne}>
                        The Sleep Company Smart GRID Stylus High-Back Chair for Office & Overparented Smart GRID
                        Technology Nylon Office Executive Chair.
                      </div>
                      <div className={styles.SellTwoTwo}>
                        <span>₹349</span>
                        <span>₹1,499</span>
                        <span>76% off</span>
                      </div>
                      <div className={styles.SellTwoThree}>
                        <a>Edit Price</a>
                        <div>
                          <img src="/img/common/edit.svg" />
                          <span>Edit product details</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
