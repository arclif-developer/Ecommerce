/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "@/global/firebase.";

import styles from "./index.module.css";
import { async } from "@firebase/util";

import backend from "@/global/backend";

export default function AddProductMain() {
  const initialState = {
    category_id: "",
    subcategory_id: "",
    seller_id: "",
    name: "",
    manufactered_by: "",
    tax: "",
    gst: "",
    model: "",
    brand: "",
    color: "",
    material_type: "",
    offers: "",
    size: "",
    width: "",
    mrp: "",
    production_date: "",
    image: [],
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    thumbnail: "",
    description: "",
    discount_rate: "",
    hashtags: "",
    stock_qty: "",
    weight: "",
    volume: "",
  };
  const [sellProductData, setSellProductData] = useState(initialState);
  const [categoryDataList, setCategoryDataList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [percent, setPercent] = useState(0);

  const handleInputs = (event) => {
    setSellProductData({ ...sellProductData, [event.target.name]: event.target.value });
  };

  // ###### API Calling =>  Find All Available Product Categories from DB ###### //
  async function getAllCategoryFn() {
    const ApiResponse = await fetch(`${backend}/admin/product/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const resData = await ApiResponse.json();
    setCategoryDataList(resData?.category);
  }

  // ###### API Calling => Category Id to find Subcategory from DB  ######//
  async function getSubCategoryDataFn(id) {
    const Api_response = await fetch(`${backend}/admin/product/sub_category/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const respData = await Api_response.json();
    setSubCategoryList(respData?.subcategories);
  }

  // ###### Category and SubCategory handler functions ####### //
  const handleSelection = (event) => {
    setSellProductData({ ...sellProductData, [event.target.name]: event.target.value });
    getSubCategoryDataFn(event.target.value);
  };

  // ##### Image file handler funtion and image files upload to firebase ####### //
  const handleImagefiles = (event) => {
    if (event.target.files[0].name) {
      const storageRef = ref(storage, `/files/products/${event.target.files[0]?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            console.log(url);
            const us = url.split("/files")[1].split("?")[0].split("%2F")[2];
            const substr = us.substring(us.lastIndexOf("."));
            const replaceurl = await url.replace(substr, "_400x400.webp");
            setSellProductData({ ...sellProductData, [event.target.name]: replaceurl });
          });
        }
      );
    }
  };

  // API CALLING => Submit the product data
  async function uploadProductDataFn() {
    var token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGI2YzNhM2U5OTk2ZWViNjBkNjg1MiIsImlhdCI6MTY3NzA0ODU2MSwiZXhwIjoxNjc5NTU0MTYxfQ.BN72_j8Yux8DdRkMd7v7vJzSGT1U_AdSG6qIhW9eVL0";
    const ApiResponse = await fetch(`${backend}/product/add_new_products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(sellProductData),
    });
    const respData = await ApiResponse.json();
    if (respData.status === 200) {
      alert("New product was created successfully");
    }
  }

  // image array added or not checking
  useEffect(() => {
    if (sellProductData.image.length > 0) {
      uploadProductDataFn();
    }
  }, [sellProductData]);

  // Product Submit Button handler funtion
  const uploadProductData = (event) => {
    event.preventDefault();
    if (sellProductData.category_id !== "" && sellProductData.subcategory_id !== "") {
      let images = [];
      images.push(sellProductData.img1);
      images.push(sellProductData.img2);
      images.push(sellProductData.img3);
      images.push(sellProductData.img4);
      setSellProductData({ ...sellProductData, ["image"]: images });
    }
  };

  // ##########
  useEffect(() => {
    getAllCategoryFn();
  }, []);

  return (
    <>
      <div className={styles.secOne}>
        <h1>Sell my products</h1>
        <div className={styles.secOneInner}>
          <div className={styles.formOuter}>
            <form onSubmit={uploadProductData}>
              <div className={styles.wTwo}>
                <div>
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Name" onChange={handleInputs} required />
                </div>
                <div>
                  <label>Brand</label>
                  <input type="text" name="brand" placeholder="Brand" onChange={handleInputs} required />
                </div>
              </div>
              <div className={styles.wOne}>
                <label>Description</label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleInputs}
                  required
                ></textarea>
              </div>

              <div className={styles.wTwo}>
                <div>
                  <label>Select product category</label>
                  <select
                    name="category_id"
                    onChange={handleSelection}
                    required
                    //  onChange={(e) => setSuggestData({ ...suggestData, phase: e.target.value })}
                  >
                    <option disabled selected value>
                      -- select an option --
                    </option>
                    {categoryDataList.length > 0 ? (
                      <>
                        {categoryDataList?.map((items, i) => {
                          return (
                            <>
                              <option name="category_id" value={items._id} key={i}>
                                {items.category_name}
                              </option>
                              ;
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <option>NO categories found</option>
                    )}
                  </select>
                </div>
                <div>
                  <label>Select product sub category</label>
                  <select
                    name="subcategory_id"
                    onChange={handleSelection}
                    //  onChange={(e) => setSuggestData({ ...suggestData, phase: e.target.value })}
                  >
                    <option disabled selected value>
                      -- select an option --
                    </option>
                    {subCategoryList.length > 0 ? (
                      <>
                        {subCategoryList?.map((items, i) => {
                          return (
                            <>
                              <option value={items._id} key={i}>
                                {items.subCategory_name}
                              </option>
                              ;
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <option>NO categories found</option>
                    )}
                  </select>
                </div>
              </div>
              <h3>Images</h3>
              <div className={styles.images}>
                <div className={styles.thumbnail}>
                  <label>Thumbnail</label>
                  <div className={styles.upd_image}>
                    <div className={styles.add_img}>
                      <input type="file" name="thumbnail" placeholder="Thumbnail" onChange={handleImagefiles} />

                      {sellProductData.thumbnail ? (
                        <>
                          <img
                            className={styles.upd_image}
                            src={sellProductData.thumbnail}
                            onError={(e) => (e.target.src = "/img/common/ina.svg")}
                            alt="Product Image"
                          />
                        </>
                      ) : (
                        <img className={styles.up_F_image} src="/img/common/add_images.svg" alt="add" />
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.all_images}>
                  <label>Images</label>
                  <div className={styles.upd_images}>
                    {/* <div className={styles.add_imgs}>
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
                  <img
                    className={styles.product}
                    src="/img/common/ni.svg"
                    onError={(e) => (e.target.src = "/img/common/ina.svg")}
                    alt="Product Image"
                  /> */}
                    <div className={styles.add_img}>
                      <input type="file" name="img1" placeholder="image" onChange={handleImagefiles} required />
                      {sellProductData.img1 ? (
                        <>
                          <img
                            className={styles.upd_image}
                            src={sellProductData.img1}
                            onError={(e) => (e.target.src = "/img/common/ina.svg")}
                            alt="Product Image"
                          />
                        </>
                      ) : (
                        <img className={styles.up_F_image} src="/img/common/add_images.svg" alt="add" />
                      )}
                    </div>
                    <div className={styles.add_img}>
                      <input type="file" name="img2" placeholder="image" onChange={handleImagefiles} required />
                      {sellProductData.img2 ? (
                        <>
                          <img
                            className={styles.upd_image}
                            src={sellProductData.img2}
                            onError={(e) => (e.target.src = "/img/common/ina.svg")}
                            alt="Product Image"
                          />
                        </>
                      ) : (
                        <img className={styles.up_F_image} src="/img/common/add_images.svg" alt="add" />
                      )}
                    </div>
                    <div className={styles.add_img}>
                      <input type="file" name="img3" placeholder="image" onChange={handleImagefiles} required />
                      {sellProductData.img3 ? (
                        <>
                          <img
                            className={styles.upd_image}
                            src={sellProductData.img3}
                            onError={(e) => (e.target.src = "/img/common/ina.svg")}
                            alt="Product Image"
                          />
                        </>
                      ) : (
                        <img className={styles.up_F_image} src="/img/common/add_images.svg" alt="add" />
                      )}
                    </div>
                    <div className={styles.add_img}>
                      <input type="file" name="img4" placeholder="image" onChange={handleImagefiles} required />
                      {sellProductData.img4 ? (
                        <>
                          <img
                            className={styles.upd_image}
                            src={sellProductData.img4}
                            onError={(e) => (e.target.src = "/img/common/ina.svg")}
                            alt="Product Image"
                          />
                        </>
                      ) : (
                        <img className={styles.up_F_image} src="/img/common/add_images.svg" alt="add" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <h3>Additional details</h3>
              <div className={styles.wTwo}>
                <div>
                  <label>Color</label>
                  <input type="text" name="color" placeholder="Color" onChange={handleInputs} required />
                </div>
                <div>
                  <label>Model</label>
                  <input type="text" name="model" placeholder="Model" onChange={handleInputs} required />
                </div>
              </div>
              <div className={styles.wTwo}>
                <div>
                  <label>Material Type</label>
                  <input
                    type="text"
                    name="material_type"
                    placeholder="Material Type"
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div>
                  <label>Manufactered by</label>
                  <input
                    type="text"
                    name="manufactered_by"
                    placeholder="Manufactered by"
                    onChange={handleInputs}
                    required
                  />
                </div>
              </div>
              <div className={styles.wTwo}>
                <div>
                  <label>Production date</label>
                  <input
                    type="text"
                    name="production_date"
                    placeholder="Production date"
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div>
                  <label>Hashtags</label>
                  <input type="text" name="hashtags" placeholder="Hashtags" onChange={handleInputs} required />
                </div>
              </div>

              <div className={styles.wThree}>
                <div>
                  <label>Stock qty</label>
                  <input type="number" name="stock_qty" placeholder="Stock qty" onChange={handleInputs} required />
                </div>
                <div>
                  <label>Size</label>
                  <input type="text" name="size" placeholder="Size" onChange={handleInputs} required />
                </div>
                <div>
                  <label>Width</label>
                  <input type="text" name="width" placeholder="Width" onChange={handleInputs} required />
                </div>
              </div>
              <div className={styles.wTwo}>
                <div>
                  <label>Weight</label>
                  <input type="text" name="weight" placeholder="Weight" onChange={handleInputs} required />
                </div>
                <div>
                  <label>Volume</label>
                  <input type="text" name="volume" placeholder="Volume" onChange={handleInputs} required />
                </div>
              </div>
              <h3>Price Section</h3>
              <div className={styles.wThree}>
                <div>
                  <label>MRP</label>
                  <input type="number" name="mrp" placeholder="MRP" onChange={handleInputs} required />
                </div>
                <div>
                  <label>Discount rate</label>
                  <input
                    type="number"
                    name="discount_rate"
                    placeholder="Discount rate"
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div>
                  <label>Offers</label>
                  <input type="text" name="offers" placeholder="Offers" onChange={handleInputs} required />
                </div>
              </div>
              <div className={styles.wTwo}>
                <div>
                  <label>Tax</label>
                  <input type="number" name="tax" placeholder="Tax" onChange={handleInputs} required />
                </div>
                <div>
                  <label>GST</label>
                  <input type="number" name="gst" placeholder="GST" onChange={handleInputs} required />
                </div>
              </div>
              <div className={styles.submit}>
                <button type="submit" onSubmit={uploadProductData}>
                  Upload product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
