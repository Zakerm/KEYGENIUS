import React, { useEffect } from "react";
import logoImage from "../../../../img/main/header/logo.jpg";
import { NavLink } from "react-router-dom";
import styles from "./HeaderLogo.module.css";

export default function HeaderLogo() {
  useEffect(() => {
    // При монтировании компонента прокручиваем страницу вверх
    window.scrollTo(0, 0);
  }, []);
  return (
    <NavLink to={"/"}>
      <div className="header__logo">
        <img src={logoImage} className="header__content-img" alt="logo-img" />
      </div>
    </NavLink>
  );
}
