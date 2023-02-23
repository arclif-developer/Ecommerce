/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./index.module.css";

export default function AddProductMain() {
  return (
    <>
      <div className={styles.secOne}>
        <h1>Sell my products</h1>
        <div className={styles.secOneInner}>
          <div className={styles.formOuter}>
            <div className={styles.wTwo}>
              <div>
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div>
                <label>Brand</label>
                <input type="text" name="brand" placeholder="Brand" />
              </div>
            </div>
            <div className={styles.wOne}>
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                defaultValue="Current Description"
                placeholder="Description"
              ></textarea>
            </div>

            <div className={styles.wTwo}>
              <div>
                <label>Select product category</label>
                <select
                  name="category_id"
                  //  onChange={(e) => setSuggestData({ ...suggestData, phase: e.target.value })}
                >
                  <option disabled selected value>
                    -- select an option --
                  </option>
                  <option value="cat">cat</option>
                  <option value="cat">cat</option>
                </select>
              </div>
              <div>
                <label>Select product sub category</label>
                <select
                  name="subcategory_id"
                  //  onChange={(e) => setSuggestData({ ...suggestData, phase: e.target.value })}
                >
                  <option disabled selected value>
                    -- select an option --
                  </option>
                  <option value="subcat">sub cat</option>
                  <option value="subcat">sub cat</option>
                </select>
              </div>
            </div>
            <h3>Images</h3>
            <div className={styles.images}>
              <div className={styles.thumbnail}>
                <label>Thumbnail</label>
                <div className={styles.upd_image}>
                  <div className={styles.add_img}>
                    <input type="file" name="thumbnail" placeholder="Thumbnail" />
                    <img className={styles.up_F_image} src="/img/common/add_images.svg" alt="add" />

                    <img
                      className={styles.upd_image}
                      src="/img/common/ni.svg"
                      onError={(e) => (e.target.src = "/img/common/ina.svg")}
                      alt="Product Image"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.all_images}>
                <label>Images</label>
                <div className={styles.upd_images}>
                  <div className={styles.add_imgs}>
                    <input type="file" multiple name="images" placeholder="Images" />
                    <img src="/img/common/add_images.svg" alt="add" />
                  </div>
                  <img
                    className={styles.product}
                    src="/img/common/ni.svg"
                    onError={(e) => (e.target.src = "/img/common/ina.svg")}
                    alt="Product Image"
                  />
                  <img
                    className={styles.product}
                    src="/img/common/ni.svg"
                    onError={(e) => (e.target.src = "/img/common/ina.svg")}
                    alt="Product Image"
                  />
                  <img
                    className={styles.product}
                    src="/img/common/ni.svg"
                    onError={(e) => (e.target.src = "/img/common/ina.svg")}
                    alt="Product Image"
                  />
                  {/* <img
                    className={styles.product}
                    src="/img/common/ni.svg"
                    onError={(e) => (e.target.src = "/img/common/ina.svg")}
                    alt="Product Image"
                  /> */}
                </div>
              </div>
            </div>
            <h3>Additional details</h3>
            <div className={styles.wTwo}>
              <div>
                <label>Color</label>
                <input type="text" name="color" placeholder="Color" />
              </div>
              <div>
                <label>Model</label>
                <input type="text" name="model" placeholder="Model" />
              </div>
            </div>
            <div className={styles.wTwo}>
              <div>
                <label>Material Type</label>
                <input type="text" name="material_type" placeholder="Material Type" />
              </div>
              <div>
                <label>Manufactered by</label>
                <input type="text" name="manufactered_by" placeholder="Manufactered by" />
              </div>
            </div>
            <div className={styles.wTwo}>
              <div>
                <label>Production date</label>
                <input type="text" name="production_date" placeholder="Production date" />
              </div>
              <div>
                <label>Hashtags</label>
                <input type="text" name="hashtags" placeholder="Hashtags" />
              </div>
            </div>

            <div className={styles.wThree}>
              <div>
                <label>Stock qty</label>
                <input type="text" name="stock_qty" placeholder="Stock qty" />
              </div>
              <div>
                <label>Size</label>
                <input type="text" name="size" placeholder="Size" />
              </div>
              <div>
                <label>Width</label>
                <input type="text" name="width" placeholder="Width" />
              </div>
            </div>
            <div className={styles.wTwo}>
              <div>
                <label>Weight</label>
                <input type="text" name="weight" placeholder="Weight" />
              </div>
              <div>
                <label>Volume</label>
                <input type="text" name="volume" placeholder="Volume" />
              </div>
            </div>
            <h3>Price Section</h3>
            <div className={styles.wThree}>
              <div>
                <label>MRP</label>
                <input type="text" name="mrp" placeholder="MRP" />
              </div>
              <div>
                <label>Discount rate</label>
                <input type="text" name="discount_rate" placeholder="Discount rate" />
              </div>
              <div>
                <label>Offers</label>
                <input type="text" name="offers" placeholder="Offers" />
              </div>
            </div>
            <div className={styles.wTwo}>
              <div>
                <label>Tax</label>
                <input type="text" name="tax" placeholder="Tax" />
              </div>
              <div>
                <label>GST</label>
                <input type="text" name="gst" placeholder="GST" />
              </div>
            </div>
            <div className={styles.submit}>
              <div>Upload product</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
