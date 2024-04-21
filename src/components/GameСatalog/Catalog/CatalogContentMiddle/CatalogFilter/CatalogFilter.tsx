import React, { useState } from "react";
import styles from "./CatalogFilter.module.css";
import FilterGenre from "./FilterGenre/FilterGenre";
import FilterPrice from "./FilterPrice/FilterPrice";
import FilterMode from "./FilterMode/FilterMode";
import FilterDate from "./FilterDate/FilterDate";

interface CatalogFilterProps {
  onFilterChange: (filterName: string, value: any) => void;
}

const CatalogFilter: React.FC<CatalogFilterProps> = ({ onFilterChange }) => {
  const [resetFilters, setResetFilters] = useState(false);
  const handleResetFilters = () => {
    setResetFilters(true); // Установка флага сброса
    setTimeout(() => {
      setResetFilters(false); // Сброс флага сброса через setTimeout
      onFilterChange("priceFrom", 0); // Сброс цены
      onFilterChange("priceTo", 5000); // Сброс цены
    }, 0);
  };

  return (
    <div className={`${styles.catalog_filter} `}>
      <div className={`${styles.filter} flex-col`}>
        <FilterPrice
          onFilterChange={onFilterChange}
          resetFilters={resetFilters}
        />
        <FilterGenre
          onFilterChange={onFilterChange}
          resetFilters={resetFilters}
        />
        <FilterMode
          onFilterChange={onFilterChange}
          resetFilters={resetFilters}
        />
        <button className={styles.reset_button} onClick={handleResetFilters}>
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
};

export default CatalogFilter;
