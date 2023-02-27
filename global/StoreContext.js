import React, { useState, createContext } from "react";
export const StoreContext = createContext();
export const StoreContextProvider = (props) => {
  // Store Yaseen start
  const [askProductPopup, setAskProductPopup] = useState(false);
  const [addAddressPopUp, setAddAddressPopUp] = useState(false);
  // Store Yaseen end

  // Store 61-5a start
  const [viewOrderPopup, setViewOrderPopup] = useState(false);
  const [userRole, setUserRole] = useState("general");
  const [fromLoginOrRegister, setFromLoginOrRegister] = useState("login");
  const [userId, setUserId] = useState("");
  const [loginActive, setLoginActive] = useState(false);
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
    viewOrderPopup,
    setViewOrderPopup,
    userRole,
    setUserRole,
    fromLoginOrRegister,
    setFromLoginOrRegister,
    userId,
    setUserId,
    loginActive,
    setLoginActive,
    // Store 61-5a end

    // Store Hashir start
    // Store Hashir end

    // Store Shijin start
    // Store Shijin end
  };
  return <StoreContext.Provider value={[Store]}>{props.children}</StoreContext.Provider>;
};
