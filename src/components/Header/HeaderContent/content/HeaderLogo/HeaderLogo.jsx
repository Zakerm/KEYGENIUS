import React, { useEffect } from "react";
import logoImage from "../../../../../img/main/header/logo.png";
import { NavLink } from "react-router-dom";
import styles from "./HeaderLogo.module.css";

export default function HeaderLogo() {
  useEffect(() => {
    // При монтировании компонента прокручиваем страницу вверх
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.logo}>
      <NavLink to={"/"}>
        <div className={styles.header__logo}>
          <img
            src={logoImage}
            className={styles.header__content_img}
            alt="logo-img"
          />
        </div>
      </NavLink>
    </div>
  );
}
