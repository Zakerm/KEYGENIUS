import React from "react";
import styles from "./CatalogFilter.module.css";
import FilterGenre from "./FilterGenre/FilterGenre";
import FilterPrice from "./FilterPrice/FilterPrice";
import FilterMode from "./FilterMode/FilterMode";
import FilterDate from "./FilterDate/FilterDate";

export default function CatalogFilter() {
  return (
    <div className={`${styles.catalog_filter} `}>
      <div className={`${styles.filter} flex-col`}>
        <FilterPrice />
        <FilterGenre />
        <FilterMode /> 
        {/* <FilterDate /> */}
      </div>
    </div>
  );
}
