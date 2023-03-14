/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import React, { useContext, useState } from "react";
import styles from "./HomeWallet.module.css";

const HomeWallet = () => {
  const [nav, setNav] = useState("credit");

  const [Store] = useContext(StoreContext);

  const setRedeemPopup = Store.setRedeemPopup;

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
              <h4>60</h4>
              <h5>Current Coin balance</h5>
            </div>
            <div className={styles.right_coinBalance_card_content} onClick={() => setRedeemPopup(true)}>
              Redeem Now
            </div>
            {/* <div className={styles.right_coinBalance_card_content}>+ Add Coin</div> */}
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
              {nav === "redeem" ? (
                <p className={styles.navActive}>Redeem details</p>
              ) : (
                <p className={styles.navNoActive} onClick={() => setNav("redeem")}>
                  Redeem details
                </p>
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
                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>
                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>
                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>
                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>
                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>
                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>
                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>
                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>

                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>
                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>
                  <div className={styles.history_container_table_row}>
                    <div className={styles.history_container_table_left}>
                      <h3>Credited from ACC Cement</h3>
                      <p>Credited coin by 12-10-2023</p>
                    </div>
                    <span>+48</span>
                  </div>
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
