import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";
import { ReactComponent as Icon } from "../../../../../img/main/header/bars-solid.svg";

export default function HeaderNav() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.header__nav}>
      <nav className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
        <ul className={styles.header__nav_list}>
          <li className={styles.header__nav_item}>
            <NavLink to={`/catalog`}>
              <div>Каталог игр</div>
            </NavLink>
          </li>
          <li className={styles.header__nav_item}>
            <NavLink to={"/support"}>
              <div>Поддержка</div>
            </NavLink>
          </li>
          <li className={styles.header__nav_item}>
            <NavLink to={"#"}>
              <div>Покупки</div>
            </NavLink>
          </li>
          <li className={styles.header__nav_item}>
            <NavLink to={"#"}>
              <div>Отзывы</div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className={styles.header__nav_button}
        onClick={() => setOpen(!isOpen)}
      >
        <Icon />
      </button>
    </div>
  );
}
