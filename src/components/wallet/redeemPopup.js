/* eslint-disable @next/next/no-img-element */
import { StoreContext } from "@/global/StoreContext";
import React, { useContext } from "react";
import styles from "./redeemPopup.module.css";

const RedeemPopup = () => {
  const [Store] = useContext(StoreContext);
  const setRedeemPopup = Store.setRedeemPopup;
  const coinBalance = Store.coinBalance;

  console.log(setRedeemPopup);

  return (
    <div className={styles.redeemPopup_outer}>
      <div className={styles.redeemPopup_close} onClick={() => setRedeemPopup(false)}></div>
      <div className={styles.redeemPopup_inner}>
        <div className={styles.redeemPopup_inner_inner}>
          <div className={styles.redeemPopup_header}>
            <h4>Choose the Redeem option</h4>
            <img src="/icon/closePopup.svg" alt="" onClick={() => setRedeemPopup(false)} />
          </div>
          <h5>
            How its work? <span>Explain it</span>
          </h5>
          <div className={styles.redeemContent_container}>
            <div className={styles.redeemContent_container_left}>
              {coinBalance >= 100 ? (
                <div className={styles.circle_active}>100</div>
              ) : (
                <div className={styles.circle_noActive}>100</div>
              )}
              {coinBalance >= 300 ? (
                <div className={styles.circle_active}>300</div>
              ) : (
                <div className={styles.circle_noActive}>300</div>
              )}
              {coinBalance >= 1000 ? (
                <div className={styles.circle_active}>1000</div>
              ) : (
                <div className={styles.circle_noActive}>1000</div>
              )}
            </div>
            <div className={styles.redeemContent_container_right}>
              <div className={styles.card_redeem}>
                <div className={styles.card_redeem_left}>
                  <img src="/img/wallet/redeemCoin.svg" alt="" />
                  <div className={styles.card_redeem_text}>
                    <h5>Redeem coin</h5>
                    <p>You have {coinBalance} coin now</p>
                  </div>
                </div>
                {coinBalance >= 100 ? (
                  <div className={styles.redeem_button}>Redeem now</div>
                ) : (
                  <div className={styles.redeem_butto_nonactive}>Redeem now</div>
                )}
              </div>
              <div className={styles.card_redeem}>
                <div className={styles.card_redeem_left}>
                  <img src="/img/wallet/gift.svg" alt="" />
                  <div className={styles.card_redeem_text}>
                    <h5>Create a gift voucher</h5>
                    <p>You need 300 coin to create </p>
                  </div>
                </div>
                {coinBalance >= 300 ? (
                  <div className={styles.create_button}>Create</div>
                ) : (
                  <div className={styles.create_button_nonactive}>Create</div>
                )}
              </div>
              <div className={styles.card_redeem}>
                <div className={styles.card_redeem_left}>
                  <img src="/img/wallet/trip.svg" alt="" />
                  <div className={styles.card_redeem_text}>
                    <h5>Make a trip</h5>
                    <p>You need 1000 coin to make </p>
                  </div>
                </div>
                {coinBalance >= 300 ? (
                  <div className={styles.create_button}>Create</div>
                ) : (
                  <div className={styles.create_button_nonactive}>Create</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemPopup;
