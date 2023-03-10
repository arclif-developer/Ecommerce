/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/global/StoreContext";
import Link from "next/link";
import useWindowDimensions from "@/global/window";
import styles from "./Footer.module.css";

const Footer = () => {
  const router = useRouter();
  const years = new Date().getFullYear();
  const { height, width, mobile, desktop } = useWindowDimensions();
  const [Store] = useContext(StoreContext);
  const setUserRole = Store.setUserRole;

  const [role, setRole] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const role = localStorage.getItem("role");
      setRole(role);
    }
  }, []);
  return (
    <div className={styles.footer_outer}>
      <div className={styles.footer_inner}>
        {role == "general" || role == "business" ? (
          <div className={styles.left_footer}>
            <h4>Connect with us</h4>
            <p>
              <b>Arclif Technologies Pvt Ltd</b>
            </p>
            <p>➢ Coastal Hwy, Lewes, Delaware 19958, US</p>
            <p>➢ Unit 3B, 3rd Floor, Sahya Government Cyberpark, Calicut, Kerala 673014</p>
            <br />
            <p>
              Email: support@arclif.com <br />
              Phone: +91 9995111325
            </p>

            <span>© Copyright Arclif {years} All Right Reserved</span>
          </div>
        ) : (
          <div className={styles.left_footer}>
            <h4>Join with Arclif ecom</h4>
            <p>Monte Contemporary Dining Chair With Black Powder Coated Metal Legs, Gray</p>
            <div className={styles.left_footer_buttons}>
              <div className={styles.joinNow_button} onClick={() => (setUserRole("general"), router.push(`/register`))}>
                Join now
              </div>
              <div
                className={styles.forBusiness_button}
                onClick={() => (setUserRole("business"), router.push(`/register`))}
              >
                For business
              </div>
            </div>
            <span>© Copyright Arclif {years} All Right Reserved</span>
          </div>
        )}
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
            <li>
              <Link href="https://www.facebook.com/arclifonline/" target="_blank" rel="noopener noreferrer">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/arclifonline/?hl=en" target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href={
                  desktop
                    ? "https://web.whatsapp.com/send?phone=918921244492&submit=Continue"
                    : "https://api.whatsapp.com/send?phone=918921244492&submit=Continue"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </Link>
            </li>
            <li>
              <Link href="https://mobile.twitter.com/arclifonline" target="_blank" rel="noopener noreferrer">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/arclif/mycompany/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UCl-44gZvJo-OMWS_ITJxyEw"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </Link>
            </li>
          </ul>
          <ul className={styles.linksNavContainer}>
            <li>
              <span>Links</span>
            </li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <Link href="/privacypolicy">Privacy Policy</Link>
            </li>
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
