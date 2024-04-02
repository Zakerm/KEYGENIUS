import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  return (
    <div className="header__nav">
      <nav>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to={"#"}>Каталог игр</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={"#"}>Поддержка</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={"#"}>Покупки</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to={"#"}>Отзывы</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
