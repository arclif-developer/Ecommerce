/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./SingleProductView.module.css";

const SingleProductView = () => {
  return (
    <div className={styles.singleProductView}>
      <div className={styles.single_top}>
        <div className={styles.single_top_image_container}>
          <div className={styles.single_top_left}>
            <img
              src="https://www.dauphin.com/img?f=_media/products/tec_line/jpg/2021/020521_tec_sp9110d_deskchair_rev01.jpg&w=1000&h=1000&r=fit"
              alt=""
            />
            <img
              src="https://www.dauphin.com/img?f=_media/products/tec_line/jpg/2021/020521_tec_sp9110d_deskchair_rev01.jpg&w=1000&h=1000&r=fit"
              alt=""
            />
            <img
              src="https://www.dauphin.com/img?f=_media/products/tec_line/jpg/2021/020521_tec_sp9110d_deskchair_rev01.jpg&w=1000&h=1000&r=fit"
              alt=""
            />
            <img
              src="https://www.dauphin.com/img?f=_media/products/tec_line/jpg/2021/020521_tec_sp9110d_deskchair_rev01.jpg&w=1000&h=1000&r=fit"
              alt=""
            />
            <img
              src="https://www.sitonit.net/content/dam/exemplis/webimages/product/rio/thumbs/soi_landing_page_thumb_rio_four_leg_405x475.png.transform/mobile/img.png"
              alt=""
            />
          </div>
          <div className={styles.single_top_center}>
            <img
              src="https://www.dauphin.com/img?f=_media/products/tec_line/jpg/2021/020521_tec_sp9110d_deskchair_rev01.jpg&w=1000&h=1000&r=fit"
              alt=""
            />
            <div className={styles.saveButtonMobile}>
              <img src="/icon/save.svg" alt="" />
              Save
            </div>
          </div>
        </div>
        <div className={styles.single_top_right}>
          <h5>The Sleep Company Smart GRID Stylus High-Back Chair for Office & Overparented.</h5>
          <span>By Furniture Global</span>
          <div className={styles.priceProduct_container}>
            <div className={styles.price_product}>
              <h5>₹3249</h5>
              <p>₹5,499</p>
              <span>76% off</span>
            </div>
            <div className={styles.quantity}>
              Qty
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <img src="/icon/arrowDown.svg" alt="" />
            </div>
          </div>
          <p>Save ₹ 4,851 MRP ₹ 17,100 (Inc of all taxes)</p>
          <div className={styles.ratings}></div>
          <div className={styles.ship_date}>Ship within 2 days</div>
          <div className={styles.pincodeCheck}>
            <input placeholder="Enter the pincode" type="tel" />
            <div className={styles.checkButton}>Check</div>
          </div>
          <div className={styles.pincodeEnter}>
            <img src="/icon/delivery.svg" alt="" />
            Please enter pin code to check home delivery availability.
          </div>
          <div className={styles.button_container}>
            <div className={styles.addtocart_button}>Add to cart</div>
            <div className={styles.buynow_button}>Buy now</div>
            <div className={styles.saveButton}>
              <img src="/icon/save.svg" alt="" />
              Save
            </div>
          </div>
        </div>
      </div>
      <div className={styles.single_center}>
        <div className={styles.single_center_title}>
          <h3>More details</h3>
        </div>
        <div className={styles.single_center_nav}>
          <nav>
            <ul>
              <li>Overview</li>
              <li>Details</li>
              <li>Merchant Info</li>
              <li>Returns & Cancellations</li>
            </ul>
          </nav>
        </div>
        <p>
          Whether you need a chair for your gaming station or your study spot, a gaming chair is a fantastic choice.
          Ergonomic and comfortable, our gaming chairs come in different styles too.Your gaming desk is somewhere you
          will spend long hours, so it’s important to get the comfort, ergonomics and functionality you need. And of
          course, the right extras can also help make things more enjoyable.
        </p>
      </div>
      <div className={styles.single_bottom}>
        <div className={styles.single_bottom_title}>
          <h3>Similar products</h3>
        </div>
        <div className={styles.single_bottom_products}>
          <img src="http://sc04.alicdn.com/kf/H2949a021ace94a4cb1878de02cb32168H.jpg" alt="" />
          <img src="http://sc04.alicdn.com/kf/H2949a021ace94a4cb1878de02cb32168H.jpg" alt="" />
          <img src="http://sc04.alicdn.com/kf/H2949a021ace94a4cb1878de02cb32168H.jpg" alt="" />
          <img src="http://sc04.alicdn.com/kf/H2949a021ace94a4cb1878de02cb32168H.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleProductView;
