import React, { useEffect, useState } from "react";
import styles from "./FilterPrice.module.css";

interface FilterPriceProps {
  onFilterChange: (filterName: string, value: number) => void;
  resetFilters: boolean;
}

export default function FilterPrice({
  onFilterChange,
  resetFilters,
}: FilterPriceProps) {
  const [priceFrom, setPriceFrom] = useState<number>(0);
  const [priceTo, setPriceTo] = useState<number>(5000);

  useEffect(() => {
    if (resetFilters) {
      setPriceFrom(0);
      setPriceTo(5000);
    }
  }, [resetFilters]);

  const handlePriceChange = (type: string, value: string) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      if (type === "From") {
        setPriceFrom(parsedValue);
        onFilterChange("priceFrom", parsedValue);
      } else if (type === "To") {
        setPriceTo(parsedValue);
        onFilterChange("priceTo", parsedValue);
      }
    } else {
      // Установка значения по умолчанию при пустой строке или некорректном вводе
      if (type === "From") {
        setPriceFrom(0);
        onFilterChange("priceFrom", 0);
      } else if (type === "To") {
        setPriceTo(0);
        onFilterChange("priceTo", 5000);
      }
    }
  };

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
            type="text"
            value={priceFrom}
            placeholder="0"
            onChange={(e) => handlePriceChange("From", e.target.value)}
          />
        </div>
        <div className={`${styles.price_to} flex`}>
          <p>До</p>
          <input
            className={`${styles.input_price}`}
            type="text"
            value={priceTo}
            onChange={(e) => handlePriceChange("To", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
