/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import backend from "@/global/backend";
import moment from "moment";

import styles from "./index.module.css";
export default function BusinessAccountMain() {
  const router = useRouter();

  const [section, setSection] = useState("profile");
  const [orderHistory, setOrderHistory] = useState([]);
  const [sellingProducts, setSellingProducts] = useState([]);
  const imgurl = "#";

  const logout = () => {
    localStorage.removeItem("Id");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push("/");
  };

  async function getOrderHistory() {
    // token
    let token = localStorage.getItem("token");
    const ApiResponse = await fetch(`${backend}/order/delivered_orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    const resp = await ApiResponse.json();
    if (resp.status === 200) {
      setOrderHistory(resp?.orderHistory);
    }
  }

  async function getSellerProducts() {
    // token
    let token = localStorage.getItem("token");
    const ApiResponse = await fetch(`${backend}/product/sellers_products_view`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await ApiResponse.json();
    console.log(response);
    if (response.status === 200) {
      console.log(response);
      setSellingProducts(response.sellerProducts);
    }
  }
  useEffect(() => {
    getOrderHistory();
    getSellerProducts();
  }, []);
  console.log(sellingProducts);
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
            <div className={styles.logout_button} onClick={() => logout()}>
              Logout
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
                    <label>Company name</label>
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      defaultValue="Current Company name"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label>Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      defaultValue="users Current location"
                      placeholder="Location"
                    />
                  </div>
                  <div>
                    <label>Company Address</label>
                    <textarea
                      type="text"
                      id="company_address"
                      name="company_address"
                      defaultValue="Current Company Address"
                      placeholder="Company Address"
                    ></textarea>
                  </div>
                  <div>
                    <label>District</label>
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
                      <label>Contact Number</label>
                      <input
                        type="text"
                        id="contact_number"
                        name="contact_number"
                        defaultValue="Current Contact Number"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div>
                      <label>Contact Mail</label>
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
                  <React.Fragment key={i}>
                    {items.products.map((products, index) => {
                      return (
                        <React.Fragment key={index}>
                          {products?.delivery_status === "DELIVERED" ? (
                            <>
                              <div className={styles.history_outer} key={index}>
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
                                        <img src="/icon/address-h.png" alt="Address" />
                                        <span>Delivery address:</span>
                                      </div>
                                      <div className={styles.TwoTwoTwo}>
                                        <p>
                                          {items?.address_id?.address}, {items?.address_id?.city},{" "}
                                          {items?.address_id?.state}, {items?.address_id?.pincode}
                                        </p>
                                        {items?.address_id?.phone ? (
                                          <p>Mobile Number: +91 {items?.address_id?.phone}</p>
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
                                      <img src="/icon/address-h.png" alt="Address" />
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
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            ) : section === "sell" ? (
              <div className={styles.sell_max_outer}>
                {sellingProducts.map((items, i) => (
                  <div className={styles.sell_outer} key={i}>
                    <img
                      className={styles.product}
                      src={items.thumbnail ? items.thumbnail : "/img/common/ni.svg"}
                      onError={(e) => (e.target.src = "/img/common/ina.svg")}
                      alt="Product Image"
                    />
                    <div className={styles.SellTwo}>
                      <div className={styles.SellTwoOne}>{items.name}</div>
                      <div className={styles.SellTwoTwo}>
                        {items.discount_rate ? (
                          <>
                            <span>₹{items.mrp - (items.mrp * items.discount_rate) / 100}</span>
                            <span>₹{items.mrp}</span>
                            <span>{items.discount_rate}% off</span>
                          </>
                        ) : (
                          <>
                            <span>₹{items.mrp}</span>
                          </>
                        )}
                      </div>
                      <div className={styles.SellTwoThree}>
                        <a>Edit Price</a>
                        <div>
                          <img src="/img/common/edit.svg" alt="Edit" />
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
