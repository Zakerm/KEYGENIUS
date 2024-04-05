import React from "react";
import styles from "./FilterMode.module.css";
import ISingle from "../../../../../../img/Filter/mode/single.png";
import IСooperative from "../../../../../../img/Filter/mode/cooperative.png";
import INetwork from "../../../../../../img/Filter/mode/network.png";

export default function FilterMode() {
  return (
    <div className={`${styles.filter_mode}`}>
      <div className={styles.filter_mode_name}></div>
      <div className={`${styles.mode}`}>
        <div className={`${styles.mode_content}`}>
          <img src={ISingle} className={styles.mode_content_img} alt="" />
          <p className={styles.mode_content_text}>Одиночная</p>
        </div>
        <div className={`${styles.mode_content}`}>
          <img src={IСooperative} className={styles.mode_content_img} alt="" />
          <p className={styles.mode_content_text}>Кооператив</p>
        </div>
        <div className={`${styles.mode_content}`}>
          <img src={INetwork} className={styles.mode_content_img} alt="" />
          <p className={styles.mode_content_text}>Сетевая</p>
        </div>
      </div>
    </div>
  );
}
