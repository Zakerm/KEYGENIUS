import React from "react";
import "../../css/general.css";
import styles from "./MenuGame.module.css";
import MenuGameSelect from "./MenuGameSelect/MenuGameSelect";
import MenuGameCards from "./MenuGameCards/MenuGameCards";
import { Link, NavLink } from "react-router-dom";

export default function MenuGame() {
  return (
    <section className="section">
      <div className="container">
        <div className="MenuGame">
          <MenuGameSelect />
          <MenuGameCards />
          <p className={styles.see_more}>
            <NavLink to={`/catalog`}>Показать больше →</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}
