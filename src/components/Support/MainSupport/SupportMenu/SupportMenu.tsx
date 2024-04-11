import React from "react";
import styles from "./SupportMenu.module.css";
import { NavLink } from "react-router-dom";
import products from "../../../../img/support/gamepad-solid.svg";
import payment from "../../../../img/support/cart-shopping-solid.svg";
import problems from "../../../../img/support/triangle-exclamation-solid.svg";
import ellipsis from "../../../../img/support/ellipsis-solid.svg";

export default function SupportMenu() {
  return (
    <div className={styles.container_fluid}>
      <ul className={styles.support_tabs__list}>
        <li className={styles.support_tabs__item}>
          <NavLink
            to={`/support/products`}
            className={styles.support_tabs__link}
          >
            <img className={styles.img_support} src={products} alt="" />
            <div className={styles.support_tabs__title}>Продукты</div>
          </NavLink>
        </li>
        <li className={styles.support_tabs__item}>
          <NavLink
            to={`/support/payment`}
            className={styles.support_tabs__link}
          >
            <img className={styles.img_support} src={payment} alt="" />
            <div className={styles.support_tabs__title}>Платежи</div>
          </NavLink>
        </li>
        <li className={styles.support_tabs__item}>
          <NavLink
            to={`/support/problems`}
            className={styles.support_tabs__link}
          >
            <img className={styles.img_support} src={problems} alt="" />
            <div className={styles.support_tabs__title}>Проблемы</div>
          </NavLink>
        </li>
        <li className={styles.support_tabs__item}>
          <NavLink
            to={`/support/ellipsis`}
            className={styles.support_tabs__link}
          >
            <img className={styles.img_support} src={ellipsis} alt="" />
            <div className={styles.support_tabs__title}>Другое</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
