import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.css";

export default function HeaderNav() {
  return (
    <div className={styles.header__nav}>
      <nav className="w-full">
        <ul className={styles.header__nav_list}>
          <li className={styles.header__nav_item}>
            <NavLink to={`/catalog`}>Каталог игр</NavLink>
          </li>
          <li className={styles.header__nav_item}>
            <NavLink to={"#"}>Поддержка</NavLink>
          </li>
          <li className={styles.header__nav_item}>
            <NavLink to={"#"}>Покупки</NavLink>
          </li>
          <li className={styles.header__nav_item}>
            <NavLink to={"#"}>Отзывы</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
