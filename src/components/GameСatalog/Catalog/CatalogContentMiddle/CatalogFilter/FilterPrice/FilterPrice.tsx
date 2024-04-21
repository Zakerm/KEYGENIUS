import React from "react";
import styles from "./FilterPrice.module.css";

interface FilterPriceProps {
  onFilterChange: (filterName: string, value: number) => void;
}

export default function FilterPrice({ onFilterChange }: FilterPriceProps) {
  const handlePriceChange = (type: string, value: number) => {
    onFilterChange(`price${type}`, value);
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
            type="number"
            placeholder="0"
            onChange={(e) =>
              handlePriceChange("From", parseInt(e.target.value))
            }
          />
        </div>
        <div className={`${styles.price_to} flex`}>
          <p>До</p>
          <input
            className={`${styles.input_price}`}
            type="number"
            placeholder="5000"
            onChange={(e) => handlePriceChange("To", parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
