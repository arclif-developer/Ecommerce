/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import React, { useContext } from "react";
import styles from "./AddAddressPopUp.module.css";

const AddAddressPopUp = () => {
  const [Store] = useContext(StoreContext);
  const setAddAddressPopUp = Store.setAddAddressPopUp;

  return (
    <div className={styles.addAddressPopUp_outer}>
      <div className={styles.addAddressPopUp_inner}>
        <div className={styles.addAddressPopUp_inner_inner}>
          <div className={styles.askpopup_header}>
            <p>Add new address</p>
            <img src="/img/common/closePopup.svg" alt="" onClick={() => setAddAddressPopUp(false)} />
          </div>
          <div className={styles.addAddressPopup_content}>
            <div className={styles.addAddressPopup_content_row}>
              <input type="text" placeholder="Name" />
              <input type="tel" placeholder="Mobile Number" />
            </div>
            <div className={styles.addAddressPopup_content_row}>
              <input type="tel" placeholder="Pin code" />
              <input type="text" placeholder="Location" />
            </div>
            <textarea>Address</textarea>
            <div className={styles.addAddressPopup_content_row}>
              <input type="text" placeholder="City or street" />
              <input type="text" placeholder="District" />
            </div>
            <div className={styles.addAddressPopup_content_row}>
              <input type="text" placeholder="Landmark" />
              <input type="tel" placeholder="Alternative mobile number" />
            </div>
            <div className={styles.addAddressPopup_content_buttons}>
              <div className={styles.selectButton}>Home</div>
              <div className={styles.selectButton}>Worksite</div>
            </div>
            <div className={styles.saveButton}>Save</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddressPopUp;
