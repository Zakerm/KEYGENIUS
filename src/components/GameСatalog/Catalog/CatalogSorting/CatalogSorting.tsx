import React from "react";
import styles from "./CatalogSorting.module.css";

interface CatalogSortingProps {
  onSortChange: (value: string) => void;
}

const CatalogSorting: React.FC<CatalogSortingProps> = ({ onSortChange }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onSortChange(value);
  };

  return (
    <div className="catalog_sorting">
      <div className={styles.catalog_sorting__title}>
        <h2>Все игры</h2>
      </div>
      <div className={styles.block_sorting}>
        <div className={styles.text_sorting}>Сортировать по</div>
        <div className={styles.sorting}>
          <select onChange={handleSortChange}>
            <option value="popularity">Популярности</option>
            <option value="dateNew">Дата выхода, новые</option>
            <option value="dateOld">Дата выхода, старые</option>
            <option value="priceLow">Цене, дешевые</option>
            <option value="priceHigh">Цене, дорогие</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CatalogSorting;
