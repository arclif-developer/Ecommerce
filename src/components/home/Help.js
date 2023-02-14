import React from "react";
import styles from "./Help.module.css";

const Help = () => {
  return (
    <div className={styles.help_outer}>
      <div className={styles.help_inner}>
        <div className={styles.help_left}>
          <h4>Need Help Buying?</h4>
          <p>Monte Contemporary Dining Chair With Black Powder.</p>
        </div>
        <div className={styles.contactUs_button}>Contact us</div>
      </div>
    </div>
  );
};

export default Help;
