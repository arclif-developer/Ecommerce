/* eslint-disable @next/next/no-img-element */
import backend from "@/global/backend";
import { StoreContext } from "@/global/StoreContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./askProduct-popup.module.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { PulseLoader, MoonLoader } from "react-spinners";
import storage from "@/global/firebase.";
import { districts } from "../../utils/districts";
import panchayathData from "../../utils/panchayath";

const AskProductPopUp = () => {
  const inputFile = useRef(null);
  const [Store] = useContext(StoreContext);
  const setAskProductPopup = Store.setAskProductPopup;
  const [category, setCategory] = useState([]);
  const [panchayath, setPanchayath] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const initialState = {
    image: "",
    product_name: "",
    product_category: "",
    district: "",
    panchayath: "",
    description: "",
  };
  const [reqProductDta, setReqProductDta] = useState(initialState);

  async function getAllcategories() {
    const ApiResponse = await fetch(`${backend}/admin/product/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await ApiResponse.json();
    setCategory(res?.category);
  }

  const handleDatas = (event) => {
    if (event.target.name === "district") {
      const result = panchayathData.list.filter((item) => {
        if (item.district === event.target.value) {
          return item;
        }
      });
      const panchayathDatas = result.map((item) => item.panchayth).flat();
      setPanchayath(panchayathDatas);
    }
    setReqProductDta({ ...reqProductDta, [event.target.name]: event.target.value });
  };

  // ##### Image file handler funtion and image files upload to firebase ####### //
  const handleImagefiles = (event) => {
    if (event.target.files[0].name) {
      setImageLoading(true);
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
            setReqProductDta({ ...reqProductDta, [event.target.name]: replaceurl });
          });
        }
      );
    }
  };

  useEffect(() => {
    if (imageLoading === true && percent === 100) {
      setImageLoading(false);
    }
  }, [setReqProductDta]);

  const handleSubmit = async () => {
    if (
      reqProductDta.product_name !== "" ||
      (reqProductDta.product_name !== undefined && reqProductDta.district !== undefined) ||
      (reqProductDta.district !== "" && reqProductDta.panchayath !== "") ||
      (reqProductDta.panchayath !== undefined && imageLoading === false)
    ) {
      setLoading(true);
      const token = localStorage.getItem("token");
      const ApiResp = await fetch(`${backend}/product/add_requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reqProductDta),
      });
      const response = await ApiResp.json();
      if (response.status === 200) {
        setAskProductPopup(false);
      }
    } else {
      console.log("working");
    }
  };

  useEffect(() => {
    getAllcategories();
  }, []);

  return (
    <div className={styles.askPopup_outer}>
      <div className={styles.askpopup_inner}>
        <div className={styles.askpopup_inner_inner}>
          <div className={styles.askpopup_header}>
            <p>Ask your products</p>
            <img src="/img/common/closePopup.svg" alt="" onClick={() => setAskProductPopup(false)} />
          </div>
          <div className={styles.askpopup_content}>
            <p>What is your product?</p>
            <input type="text" placeholder="Product name" name="product_name" onChange={handleDatas} />
            <p>Select product category</p>
            <div className={styles.askpopup_content_row}>
              <select name="product_category" onChange={handleDatas}>
                <option>Select product category</option>
                {category.map((items, index) => {
                  return (
                    <option key={index} value={items.category_name}>
                      {items.category_name}
                    </option>
                  );
                })}
              </select>
              <div className={styles.uploadPhoto_button} onClick={() => inputFile.current.click()}>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleImagefiles}
                  ref={inputFile}
                  name="image"
                />

                {imageLoading === false ? (
                  <>
                    {" "}
                    <img src="/icon/camera.svg" alt="" />
                    Take or upload a photo
                  </>
                ) : (
                  <p>{percent}%</p>
                )}
              </div>
            </div>
            <p>Choose your location</p>
            <div className={styles.selectContainer_row}>
              <select name="district" onChange={handleDatas}>
                <option>Select your district</option>
                {districts.map((items, index) => {
                  return (
                    <option key={index} value={items}>
                      {items}
                    </option>
                  );
                })}
              </select>
              <select name="panchayath" onChange={handleDatas}>
                <option>Select your Panchayath</option>
                {panchayath.length > 0 ? (
                  <>
                    {panchayath.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </select>
            </div>
            <p>Description</p>
            <input type="text" placeholder="Add more details" name="description" onChange={handleDatas} />
            {loading == false ? (
              <div className={styles.sendRequirement_button} onClick={handleSubmit}>
                Send my requirment
              </div>
            ) : (
              <div className={styles.sendRequirement_button}>
                <PulseLoader color="#ffffff" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskProductPopUp;
