import React from "react";
import "../../css/general.css";
import styles from "./MenuGame.module.css";
import MenuGameSelect from "./MenuGameSelect/MenuGameSelect";
import MenuGameCards from "./MenuGameCards/MenuGameCards";

export default function MenuGame() {
  return (
    <section className="section">
      <div className="container">
        <div className="MenuGame">
          <MenuGameSelect />
          <MenuGameCards />
          <p className={styles.see_more}>
            <a href="#!">Показать больше →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
