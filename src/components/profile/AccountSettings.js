/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";
import backend from "@/global/backend";

import styles from "./AccountSettings.module.css";

const AccountSettings = () => {
  const router = useRouter();
  const [Store] = useContext(StoreContext);
  const setAddAddressPopUp = Store.setAddAddressPopUp;
  const profileData = Store.profileData;
  const setProfileData = Store.setProfileData;
  const deliveryAddress = Store.deliveryAddress;
  const setDeliveryAddress = Store.setDeliveryAddress;

  const [nav, setNav] = useState("personal");

  let getprofileApiCalling = false;
  let getAdressApiCalling = false;

  async function getUserProfileData() {
    const token = localStorage.getItem("token");
    if (token) {
      getprofileApiCalling = true;
      const ApiResponse = await fetch(`${backend}/user/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await ApiResponse.json();
      if (res.status === 200) {
        setProfileData(res.userData);
        getprofileApiCalling = false;
      } else {
        alert("Something went wrong!");
      }
    } else {
      router.push("/login");
    }
  }

  async function getDeliveryAddressFn() {
    const token = localStorage.getItem("token");
    if (token) {
      const ApiResponse = await fetch(`${backend}/address`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await ApiResponse.json();
      setDeliveryAddress(res.data);
    }
  }

  useEffect(() => {
    if (!profileData && getprofileApiCalling === false) {
      getUserProfileData();
    }
    if (deliveryAddress.length === 0 && getAdressApiCalling === false) {
      getDeliveryAddressFn();
    }
  }, []);

  // console.log(deliveryAddress);
  // console.log(profileData);

  return (
    <div className={styles.accountSettings}>
      <div className={styles.accountSettings_body}>
        {nav === "personal" ? (
          <>
            <div className={styles.accountSettings_header}>
              <div className={styles.accountSettings_header_left}>
                <h3>Personal information</h3>
                <div className={styles.editButton}>Edit</div>
              </div>
              <div className={styles.accountSettings_header_right}>
                {nav === "personal" ? (
                  <p className={styles.rightNav_header_active}>Personal information</p>
                ) : (
                  <p onClick={() => setNav("personal")}> Personal information</p>
                )}

                {nav === "address" ? (
                  <span className={styles.rightNav_header_active}>Address details</span>
                ) : (
                  <span onClick={() => setNav("address")}>Address details</span>
                )}
              </div>
            </div>
            <div className={styles.personalInformation}>
              <div className={styles.personalInformation_card}>
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                {/* <div className={styles.inputContainer}>
                  <p>First name</p>
                  <input type="text" placeholder="" />
                </div> */}
                <div className={styles.inputContainer}>
                  <p>Name</p>
                  <input type="text" placeholder={profileData?.registered_id?.name} />
                </div>
                <div className={styles.inputContainer}>
                  <p>Mobile number</p>
                  <input type="tel" placeholder={profileData?.registered_id?.phone} />
                </div>
                <div className={styles.editButtonMobile}>Edit</div>
              </div>
              <div className={styles.personalInformation_card}>
                <div className={styles.inputContainer}>
                  <p>Gender</p>
                  <div className={styles.genderContainer}>
                    <div className={styles.gender}>
                      Male
                      <input type="radio" name="gender" />
                    </div>
                    <div className={styles.gender}>
                      Female
                      <input type="radio" name="gender" />
                    </div>
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <p>Email address</p>
                  <input type="email" placeholder={profileData?.registered_id?.email} />
                </div>
                <div className={styles.buttonsContainer}>
                  <div className={styles.discardButton}>Discard</div>
                  <div className={styles.saveButton}>Save & Change</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {nav === "address" ? (
              <>
                <div className={styles.accountSettings_header}>
                  <div className={styles.accountSettings_header_left_address}>
                    <h3>Manage my address</h3>
                    <div className={styles.addNewAddress_button} onClick={() => setAddAddressPopUp(true)}>
                      + Add new address
                    </div>
                  </div>
                  <div className={styles.accountSettings_header_right}>
                    {nav === "personal" ? (
                      <p className={styles.rightNav_header_active}>Personal information</p>
                    ) : (
                      <p onClick={() => setNav("personal")}> Personal information</p>
                    )}

                    {nav === "address" ? (
                      <span className={styles.rightNav_header_active}>Address details</span>
                    ) : (
                      <span onClick={() => setNav("address")}>Address details</span>
                    )}
                  </div>
                </div>
                <div className={styles.address_details}>
                  {deliveryAddress.length > 0 ? (
                    <>
                      {deliveryAddress.map((items, index) => {
                        return (
                          <React.Fragment key={index}>
                            <div className={styles.address_details_card}>
                              <div className={styles.address_details_card_top}>
                                <div className={styles.address_details_card_top_left}>
                                  <h4>{items.name}</h4>
                                  <span>+{items.phone}</span>
                                  <p>
                                    <img src="" alt="" />
                                    {items.type_of_address} address
                                  </p>
                                </div>
                                <div className={styles.address_details_card_top_right}>
                                  <p>Remove</p>
                                  <div className={styles.editAddress_button}>Edit Address</div>
                                </div>
                              </div>
                              <div className={styles.address_details_card_bottom}>
                                <div className={styles.mobileOnly}>
                                  <p>{items.name}</p>
                                  <span>+{items.phone}</span>
                                </div>
                                <img src="" alt="" />
                                <p>
                                  {items.address}, {items.location}, {items.city}, {items.district}, {items.pincode}
                                </p>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </>
                  ) : (
                    <p>No address added</p>
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AccountSettings;
