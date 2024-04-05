import React from "react";
import styles from "./FilterPrice.module.css";

export default function FilterPrice() {
  return (
    <div className={`${styles.filter_price} flex flex-col`}>
      <div className={styles.price_title}>
        <p>Цена</p>
      </div>
      <div className={`${styles.price_variation} flex justify-center`}>
        <div className={`${styles.price_from} flex`}>
          <p>От</p>
          <input
            className={`${styles.input_price}`}
            type="number"
            placeholder="0"
          />
        </div>
        <div className={`${styles.price_to} flex`}>
          <p>До</p>
          <input
            className={`${styles.input_price}`}
            type="number"
            placeholder="5000"
          />
        </div>
      </div>
    </div>
  );
}
