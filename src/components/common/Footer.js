/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_outer}>
      <div className={styles.footer_inner}>
        <div className={styles.left_footer}>
          <h4>Join with Arclif ecom</h4>
          <p>Monte Contemporary Dining Chair With Black Powder Coated Metal Legs, Gray</p>
          <div className={styles.left_footer_buttons}>
            <div className={styles.joinNow_button}>Join now</div>
            <div className={styles.forBusiness_button}>For business</div>
          </div>
          <span>© Copyright Arclif 2023 All Right Reserved</span>
        </div>
        <div className={styles.center_footer}>
          <ul>
            <li>
              <span>Company</span>
            </li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>
              <span>Social media</span>
            </li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Whatsapp</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
          <ul className={styles.linksNavContainer}>
            <li>
              <span>Links</span>
            </li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>
              <span>For Business </span>
            </li>
            <li>Buy in Bulk</li>
            <li>Guidelines</li>
          </ul>
        </div>
        <div className={styles.right_footer}>
          <span>© Copyright Arclif 2023 All Right Reserved</span>
          <p>We are Accepted</p>
          <div className={styles.right_footer_images}>
            <img src="/img/common/visa.svg" alt="" />
            <img src="/img/common/rupay.svg" alt="" />
            <img src="/img/common/maestro.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
