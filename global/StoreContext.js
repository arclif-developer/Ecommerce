import React, { useState, createContext } from "react";
export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
  // Store Yaseen start
  const [askProductPopup, setAskProductPopup] = useState(false);
  const [addAddressPopUp, setAddAddressPopUp] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [redeemPopup, setRedeemPopup] = useState(false);
  // Store Yaseen end

  // Store 61-5a start
  const [viewOrderPopup, setViewOrderPopup] = useState(false);
  const [viewOrderPopupItem, setViewOrderPopupItem] = useState([]);
  const [userRole, setUserRole] = useState("general");
  const [fromLoginOrRegister, setFromLoginOrRegister] = useState("login");
  const [userId, setUserId] = useState("");
  const [loginActive, setLoginActive] = useState(false);
  const [addCoinPopup, setAddCoinPopup] = useState(false);
  const [coinRatio, setCoinRatio] = useState(1);
  // Store 61-5a end

  // Store Hashir start
  const [userDetail, setUserDetail] = useState([]);
  // Store Hashir end

  // Store Shijin start
  const [profileData, setProfileData] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState([]);
  const [coinBalance, setCoinBalance] = useState(0);
  const [walletHistory, setWalletHistory] = useState([]);
  const [myOrders, setMyorders] = useState([]);
  const [filtermyOrders, setFiltermyOrders] = useState([]);
  const [filteredmyOrders, setFilteredmyOrders] = useState([]);
  // Store Shijin end

  const Store = {
    // Store Yaseen start
    askProductPopup,
    setAskProductPopup,
    addAddressPopUp,
    setAddAddressPopUp,
    searchQuery,
    setSearchQuery,
    redeemPopup,
    setRedeemPopup,
    // Store Yaseen end

    // Store 61-5a start
    viewOrderPopup,
    setViewOrderPopup,
    viewOrderPopupItem,
    setViewOrderPopupItem,
    userRole,
    setUserRole,
    fromLoginOrRegister,
    setFromLoginOrRegister,
    userId,
    setUserId,
    loginActive,
    setLoginActive,
    addCoinPopup,
    setAddCoinPopup,
    coinRatio,
    setCoinRatio,
    // Store 61-5a end

    // Store Hashir start
    userDetail,
    setUserDetail,
    // Store Hashir end

    // Store Shijin start
    profileData,
    setProfileData,
    deliveryAddress,
    setDeliveryAddress,
    coinBalance,
    setCoinBalance,
    walletHistory,
    setWalletHistory,
    myOrders,
    setMyorders,
    filtermyOrders,
    setFiltermyOrders,
    filteredmyOrders,
    setFilteredmyOrders,
    // Store Shijin end
  };
  return <StoreContext.Provider value={[Store]}>{props.children}</StoreContext.Provider>;
};
