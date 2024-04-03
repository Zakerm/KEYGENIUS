import React, { useState } from "react";
import loupeImage from "../../../../img/main/header/loupe.png";
import cabinetImage from "../../../../img/main/header/cabinet.png";
import { NavLink } from "react-router-dom";
import styles from "./HeaderRight.module.css";
import classNames from "classnames";

export default function HeaderRight() {
  const [searchValue, setSearchValue] = useState("");

  // Функция для очистки поля поиска
  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className={classNames(styles.header__right, styles.right)}>
      <div className={styles.header__search}>
        <input
          type="search"
          placeholder="Поиск по магазину"
          className={styles.search}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <button className={styles.clear_button} onClick={clearSearch}>
            <span role="img" aria-label="Clear" className={styles.delete}>
              &#10005;
            </span>
          </button>
        )}
      </div>
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
