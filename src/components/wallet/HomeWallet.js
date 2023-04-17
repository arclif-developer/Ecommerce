/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/global/StoreContext";

import styles from "./HomeWallet.module.css";
import backend from "@/global/backend";
import moment from "moment";

const HomeWallet = () => {
  const [Store] = useContext(StoreContext);
  const setRedeemPopup = Store.setRedeemPopup;
  const setAddCoinPopup = Store.setAddCoinPopup;
  const coinBalance = Store.coinBalance;
  const setCoinBalance = Store.setCoinBalance;
  const walletHistory = Store.walletHistory;
  const setWalletHistory = Store.setWalletHistory;
  const userId = Store.userId;
  const setUserId = Store.setUserId;

  const [nav, setNav] = useState("credit");
  const [balance, setBalance] = useState();

  async function getWalletData() {
    const token = localStorage.getItem("token");
    const Api = await fetch(`${backend}/wallet`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await Api.json();
    setCoinBalance(res?.data?.balance);
    setWalletHistory(res?.history);
  }

  const [role, setRole] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const role = localStorage.getItem("role");
      setRole(role);
    }
    getWalletData();
    if (!userId) {
      setUserId(localStorage.getItem("Id"));
    }
  }, []);
  console.log(walletHistory);

  return (
    <div className={styles.homeWallet_container}>
      <div className={styles.homeWallet_container_inner}>
        <div className={styles.homeWallet_card_title}>
          <h5>Arclif Wallet</h5>
          <div className={styles.refresh_button}>
            <img src="/icon/refreshIcon.svg" alt="" />
            Refresh
          </div>
        </div>
        <div className={styles.coinBalance_card}>
          <img src="/img/wallet/coinBalance_vector.svg" alt="" />
          <div className={styles.coinBalance_card_content}>
            <div className={styles.left_coinBalance_card_content}>
              <img src="/img/wallet/arclif_coin.svg" alt="" />
              <h4>{coinBalance ? coinBalance : 0}</h4>
              <h5>Current Coin balance</h5>
            </div>

            {role == "business" ? (
              <div className={styles.right_coinBalance_card_content} onClick={() => setAddCoinPopup(true)}>
                + Add Coin
              </div>
            ) : (
              <div className={styles.right_coinBalance_card_content} onClick={() => setRedeemPopup(true)}>
                Redeem Now
              </div>
            )}
          </div>
        </div>
        <div className={styles.transaction_container}>
          <h4>Transaction history</h4>
          <div className={styles.transaction_container_nav}>
            <div className={styles.transaction_container_nav_left}>
              {nav === "credit" ? (
                <p className={styles.navActive}>Credit</p>
              ) : (
                <p className={styles.navNoActive} onClick={() => setNav("credit")}>
                  Credit
                </p>
              )}
              {nav === "debit" ? (
                <p className={styles.navActive}>Debit</p>
              ) : (
                <p className={styles.navNoActive} onClick={() => setNav("debit")}>
                  Debit
                </p>
              )}

              {role == "business" ? (
                ""
              ) : (
                <>
                  {nav === "redeem" ? (
                    <p className={styles.navActive}>Redeem details</p>
                  ) : (
                    <p className={styles.navNoActive} onClick={() => setNav("redeem")}>
                      Redeem details
                    </p>
                  )}
                </>
              )}
            </div>
            {nav === "coin" ? (
              <p className={styles.navActive}>Coin details</p>
            ) : (
              <p className={styles.navNoActive} onClick={() => setNav("coin")}>
                Coin details
              </p>
            )}
          </div>
          <div className={styles.transaction_container_history}>
            {nav === "credit" ? (
              <div className={styles.transaction_history_container}>
                <img src="/img/wallet/coin_bg.png" alt="" />
                <div className={styles.transaction_history_container_table}>
                  {walletHistory?.map((items, index) => {
                    if (items?.recipient?._id === userId) {
                      return (
                        <React.Fragment key={index}>
                          <div className={styles.history_container_table_row}>
                            <div className={styles.history_container_table_left}>
                              <h3>Credited from {items?.sender?.registered_id?.name}</h3>
                              <p>Credited coin by {moment(`${items?.transactionDate}`).format("DD-M-YYYY")} </p>
                            </div>
                            <span>+{items?.coinAmount}</span>
                          </div>
                        </React.Fragment>
                      );
                    } else if (items?.captured) {
                      return (
                        <React.Fragment key={index}>
                          <div className={styles.history_container_table_row}>
                            <div className={styles.history_container_table_left}>
                              <h3>Purchased coin from ARCLIF</h3>
                              <p>Credited coin by {moment(`${items?.transactionDate}`).format("DD-M-YYYY")} </p>
                            </div>
                            <span>+{items?.amount}</span>
                          </div>
                        </React.Fragment>
                      );
                    }
                  })}
                </div>
              </div>
            ) : nav === "debit" ? (
              <div className={styles.transaction_history_container}>
                <img src="/img/wallet/coin_bg.png" alt="" />
                <div className={styles.transaction_history_container_table}>
                  {walletHistory?.map((items, index) => {
                    if (items?.sender?._id === userId) {
                      return (
                        <React.Fragment key={index}>
                          <div className={styles.history_container_table_row}>
                            <div className={styles.history_container_table_left}>
                              <h3>Debited from {items?.sender?.registered_id?.name}</h3>
                              <p>Debited coin by {moment(`${items?.transactionDate}`).format("DD-M-YYYY")} </p>
                            </div>
                            <span className={styles.debit_span}>-{items?.coinAmount}</span>
                          </div>
                        </React.Fragment>
                      );
                    }
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWallet;
