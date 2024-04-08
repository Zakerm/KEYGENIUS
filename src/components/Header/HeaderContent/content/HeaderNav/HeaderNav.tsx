import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";

export default function HeaderNav() {
  return (
    <div className={styles.header__nav}>
      <nav className={styles.nav}>
        <ul className={styles.header__nav_list}>
          <li className={styles.header__nav_item}>
            <NavLink to={`/catalog`}>
              <div>Каталог игр</div>
            </NavLink>
          </li>
          <li className={styles.header__nav_item}>
            <NavLink to={"#"}>
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
    </div>
  );
}
