import React, { useState } from "react";
import loupeImage from "../../../../img/main/header/loupe.png";
import cabinetImage from "../../../../../img/main/header/cabinet.png";
import { NavLink } from "react-router-dom";
import styles from "./HeaderRight.module.css";
import classNames from "classnames";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

export default function HeaderRight() {
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
    </div>
  );
}
