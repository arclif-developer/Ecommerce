/* eslint-disable @next/next/no-img-element */
import backend from "@/global/backend";
import { StoreContext } from "@/global/StoreContext";
import React, { useContext, useState } from "react";
import styles from "./AddAddressPopUp.module.css";

const AddAddressPopUp = () => {
  const [Store] = useContext(StoreContext);
  const setAddAddressPopUp = Store.setAddAddressPopUp;
  const deliveryAddress = Store.deliveryAddress;
  const setDeliveryAddress = Store.setDeliveryAddress;
  const initialState = {
    name: "",
    phone: "",
    pincode: null,
    district: "",
    city: "",
    location: "",
    landmark: "",
    address: "",
    alternative_phone: "",
    type_of_address: "",
  };
  const [address, setAddress] = useState(initialState);

  const handleInputs = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };
  const handleAddresstype = (type) => {
    setAddress({ ...address, ["type_of_address"]: type });
  };
  const handleSave = async () => {
    if (
      address.name !== "" &&
      address.phone !== "" &&
      address.pincode !== "" &&
      address.location !== "" &&
      address.address !== "" &&
      address.city !== "" &&
      address.district !== "" &&
      address.landmark !== "" &&
      address.alternative_phone !== "" &&
      address.type_of_address !== ""
    ) {
      let token = localStorage.getItem("token");
      const ApiResponse = await fetch(`${backend}/address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(address),
      });
      const res = await ApiResponse.json();
      console.log(res);
      if (res.status === 200) {
        setDeliveryAddress([...deliveryAddress, res.addressDta]);
        setAddAddressPopUp(false);
      } else {
        alert("Delivery address not added!, please try again");
      }
    } else {
      alert("Fill all* fields");
    }
  };
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
              <input type="text" placeholder="Name" onChange={handleInputs} name="name" />
              <input type="tel" placeholder="Phone" name="phone" onChange={handleInputs} />
            </div>
            <div className={styles.addAddressPopup_content_row}>
              <input type="tel" placeholder="Pin code" name="pincode" onChange={handleInputs} />
              <input type="text" placeholder="Location" name="location" onChange={handleInputs} />
            </div>
            <textarea name="address" onChange={handleInputs} placeholder="Address"></textarea>
            <div className={styles.addAddressPopup_content_row}>
              <input type="text" placeholder="City or street" name="city" onChange={handleInputs} />
              <input type="text" placeholder="District" name="district" onChange={handleInputs} />
            </div>
            <div className={styles.addAddressPopup_content_row}>
              <input type="text" placeholder="Landmark" name="landmark" onChange={handleInputs} />
              <input
                type="tel"
                placeholder="Alternative mobile number"
                name="alternative_phone"
                onChange={handleInputs}
              />
            </div>
            <div className={styles.addAddressPopup_content_buttons}>
              {address.type_of_address === "home" ? (
                <div className={styles.selectButtonActive}>Home</div>
              ) : (
                <div className={styles.selectButton} onClick={() => handleAddresstype("home")}>
                  Home
                </div>
              )}

              {address.type_of_address === "worksite" ? (
                <div className={styles.selectButtonActive}>Worksite</div>
              ) : (
                <div className={styles.selectButton} onClick={() => handleAddresstype("worksite")}>
                  Worksite
                </div>
              )}
            </div>
            <div className={styles.saveButton} onClick={handleSave}>
              {" "}
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddressPopUp;
