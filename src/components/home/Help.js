import React from "react";
import useWindowDimensions from "@/global/window";

import styles from "./Help.module.css";

const Help = () => {
  const { height, width, mobile, desktop } = useWindowDimensions();
  // console.log(height);
  // console.log(width);
  // console.log("mobile", mobile);
  // console.log("desktop", desktop);
  // console.log(useWindowDimensions());
  return (
    <div className={styles.help_outer}>
      <div className={styles.help_inner}>
        <div className={styles.help_left}>
          <h4>Need Help Buying?</h4>
          <p>Monte Contemporary Dining Chair With Black Powder.</p>
        </div>
        <a
          className={styles.contactUs_button}
          href={
            desktop
              ? "https://web.whatsapp.com/send?phone=918921244492&submit=Continue"
              : "https://api.whatsapp.com/send?phone=918921244492&submit=Continue"
          }
          target="_blank"
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Help;
