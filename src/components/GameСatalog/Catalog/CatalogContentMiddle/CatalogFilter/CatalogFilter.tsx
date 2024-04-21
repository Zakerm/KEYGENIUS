import React from "react";
import styles from "./CatalogFilter.module.css";
import FilterGenre from "./FilterGenre/FilterGenre";
import FilterPrice from "./FilterPrice/FilterPrice";
import FilterMode from "./FilterMode/FilterMode";
import FilterDate from "./FilterDate/FilterDate";

interface CatalogFilterProps {
  onFilterChange: (filterName: string, value: any) => void; // Adjust 'value' type as needed
}

const CatalogFilter: React.FC<CatalogFilterProps> = ({ onFilterChange }) => {
  return (
    <div className={`${styles.catalog_filter} `}>
      <div className={`${styles.filter} flex-col`}>
        <FilterPrice onFilterChange={onFilterChange} />
        <FilterGenre onFilterChange={onFilterChange} />
        <FilterMode onFilterChange={onFilterChange} />
        <div></div>
      </div>
    </div>
  );
};

export default CatalogFilter;
