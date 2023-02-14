import { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
  const [askProductPopup, setAskProductPopup] = useState(false);

  const Store = {
    askProductPopup,
    setAskProductPopup,
  };

  return <StoreContext.Provider value={[Store]}>{props.children}</StoreContext.Provider>;
};
