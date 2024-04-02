import React, { useState } from "react";
import loupeImage from "../../../../img/main/header/loupe.png";
import cabinetImage from "../../../../img/main/header/cabinet.png";
import { NavLink } from "react-router-dom";

export default function HeaderRight() {
  const [searchValue, setSearchValue] = useState("");

  // Функция для очистки поля поиска
  const clearSearch = () => {
    setSearchValue("");
  };

  

  return (
    <div className="header__right right">
      <div className="header__search">
        <input
          type="search"
          placeholder="Поиск по магазину"
          className="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <button className="clear-button" onClick={clearSearch}>
            <span role="img" aria-label="Clear" className="delete">
              &#10005;
            </span>
          </button>
        )}
      </div>
      <div className="header__cabinet">
        <NavLink to={"#"}>
          <img
            src={cabinetImage}
            className="header__cabinet-img"
            alt="cabinetImage"
          />
        </NavLink>
      </div>
    </div>
  );
}
