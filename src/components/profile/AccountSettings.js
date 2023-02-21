/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import React, { useContext, useState } from "react";
import styles from "./AccountSettings.module.css";

const AccountSettings = () => {
  const [nav, setNav] = useState("personal");

  const [Store] = useContext(StoreContext);
  const setAddAddressPopUp = Store.setAddAddressPopUp;

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
                <div className={styles.inputContainer}>
                  <p>First name</p>
                  <input type="text" />
                </div>
                <div className={styles.inputContainer}>
                  <p>Last name</p>
                  <input type="text" />
                </div>
                <div className={styles.inputContainer}>
                  <p>Mobile number</p>
                  <input type="tel" />
                </div>
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
                  <input type="email" />
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
                  <div className={styles.accountSettings_header_left}>
                    <h3>Manage my address</h3>
                    <div className={styles.addNewAddress_button} onClick={() => setAddAddressPopUp(true)}>
                      Add new address
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
                  <div className={styles.address_details_card}>
                    <div className={styles.address_details_card_top}>
                      <div className={styles.address_details_card_top_left}>
                        <h4>ALTHAF RAHMAN</h4>
                        <span>+91 1234567890</span>
                        <p>
                          <img src="" alt="" />
                          Home addess
                        </p>
                      </div>
                      <div className={styles.address_details_card_top_right}>
                        <p>Remove</p>
                        <div className={styles.editAddress_button}>Edit Address</div>
                      </div>
                    </div>
                    <div className={styles.address_details_card_bottom}>
                      <img src="" alt="" />
                      <p>Govt Cyber Park (sahya) nellikode Calicut, Kozhikode, Kerala - 673016</p>
                    </div>
                  </div>
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
