/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function BusinessAccountMain() {
  const [section, setSection] = useState("profile");
  const imgurl = "#";
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
                    <img src={imgurl} />
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
              <div className={styles.history_outer}>
                <div className={styles.his_outer}>
                  <img
                    className={styles.product}
                    src="/img/common/ni.jpg"
                    onError={(e) => (e.target.src = "/img/common/ina.png")}
                    alt="Product Image"
                  />
                  <div className={styles.Two}>
                    <div className={styles.TwoOne}>
                      <h4>₹349</h4>
                      <p>
                        The Sleep Company Smart GRID Stylus High-Back Chair for Office & Overparented Smart GRID
                        Technology Nylon Office Executive Chair.
                      </p>
                    </div>
                    <div className={styles.TwoTwo}>
                      <div className={styles.TwoTwoOne}>
                        <img src="/img/orderlist/address.png" alt="Address" />
                        <span>Delivery address:</span>
                      </div>
                      <div className={styles.TwoTwoTwo}>
                        <p>686 Great South Road, Manukau, Saules ilea 7 - 16, Cosi</p>
                        <p>Mobile Number: +91 2543 211 212</p>
                      </div>
                    </div>
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
            ) : section === "sell" ? (
              <>
                <div>Sell products list</div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
