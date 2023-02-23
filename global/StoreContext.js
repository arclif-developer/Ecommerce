import React, { useState, createContext } from "react";
export const StoreContext = createContext();
export const StoreContextProvider = (props) => {
  // Store Yaseen start
  const [askProductPopup, setAskProductPopup] = useState(false);
  const [addAddressPopUp, setAddAddressPopUp] = useState(false);
  // Store Yaseen end

  // Store 61-5a start
  const [sellProductPopup, setSellProductPopup] = useState(false);
  const [viewOrderPopup, setViewOrderPopup] = useState(false);
  // Store 61-5a end

  // Store Hashir start
  // Store Hashir end

  // Store Shijin start
  // Store Shijin end

  const Store = {
    // Store Yaseen start
    askProductPopup,
    setAskProductPopup,
    addAddressPopUp,
    setAddAddressPopUp,
    // Store Yaseen end

    // Store 61-5a start
    sellProductPopup,
    setSellProductPopup,
    viewOrderPopup,
    setViewOrderPopup,
    // Store 61-5a end

    // Store Hashir start
    // Store Hashir end

    // Store Shijin start
    // Store Shijin end
  };
  return <StoreContext.Provider value={[Store]}>{props.children}</StoreContext.Provider>;
};
