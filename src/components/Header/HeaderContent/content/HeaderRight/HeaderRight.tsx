import React from "react";
import cabinetImage from "../../../../../img/main/header/cabinet.png";
import { NavLink } from "react-router-dom";
import styles from "./HeaderRight.module.css";
import classNames from "classnames";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderCart from "./HeaderCart/HeaderCart";
import { useCart } from "./HeaderCart/CartContext"; // Импортируем контекст

export default function HeaderRight() {
  const { cart } = useCart(); // Получаем информацию о корзине из контекста

  return (
    <div className={classNames(styles.header__right, styles.right)}>
      <HeaderSearch />
      <div className={styles.header__cabinet}>
        <NavLink to={"#"}>
          <img
            src={cabinetImage}
            className={styles.header__cabinet_img}
            alt="cabinetImage"
          />
        </NavLink>
      </div>

      <div className={styles.cart}>
        <HeaderCart />
      </div>
    </div>
  );
}
