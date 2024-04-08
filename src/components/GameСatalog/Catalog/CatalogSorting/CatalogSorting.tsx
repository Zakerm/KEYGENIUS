import React from "react";
import styles from "./CatalogSorting.module.css";

export default function CatalogSorting() {
  return (
    <div className="catalog_sorting">
      <div className={styles.catalog_sorting__title}>
        <h2>Все игры</h2>
      </div>
      <div className={styles.block_sorting}>
        <div className={styles.text_sorting}>Сортировать по</div>
        <div className={styles.sorting}>
          <select>
            <option value="option1">Популярности</option>
            <option value="option2">Дата выхода,новые</option>
            <option value="option3">Дата выхода,старые</option>
            <option value="option4">Цене, дешевые</option>
            <option value="option5">Цене, дорогие</option>
          </select>
        </div>
      </div>
    </div>
  );
}
