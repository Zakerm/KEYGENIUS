import React, { useEffect, useState } from "react";
import ISingle from "../../../../../../img/Filter/mode/svg/single.svg";
import IСooperative from "../../../../../../img/Filter/mode/svg/cooperative.svg";
import INetwork from "../../../../../../img/Filter/mode/svg/network.svg";
import styles from "./FilterMode.module.css";

interface FilterModeProps {
  onFilterChange: (filterName: string, value: string[]) => void;
  resetFilters: boolean;
}

const FilterMode: React.FC<FilterModeProps> = ({
  onFilterChange,
  resetFilters,
}) => {
  const [selectedModes, setSelectedModes] = useState<string[]>([]);

  useEffect(() => {
    if (resetFilters) {
      setSelectedModes([]); // Сброс выбранных жанров
      setActiveGenres({});
      onFilterChange("modes", []); // Обновляем состояние фильтра жанров в родительском компоненте
    }
  }, [resetFilters]);

  const handleModeChange = (mode: string, checked: boolean) => {
    let updatedModes = [...selectedModes];
    if (checked) {
      updatedModes.push(mode);
    } else {
      updatedModes = updatedModes.filter((m) => m !== mode);
    }
    setSelectedModes(updatedModes);
    onFilterChange("modes", updatedModes);
  };

  const [activeGenres, setActiveGenres] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleActive = (e: React.MouseEvent<HTMLInputElement>) => {
    const genre = e.currentTarget.value;
    setActiveGenres((prevGenres) => ({
      ...prevGenres,
      [genre]: !prevGenres[genre],
    }));
  };

  return (
    <div className={styles.filter_mode}>
      <div className={styles.filter_mode_name}>Режимы игры</div>
      <div className={styles.mode}>
        <div className={styles.mode_checkbox}>
          <input
            onClick={toggleActive}
            value="singleplayer"
            type="checkbox"
            id="single-mode"
            className={styles.hidden_checkbox}
            onChange={(e) => handleModeChange("singleplayer", e.target.checked)}
            checked={selectedModes.includes("singleplayer")}
          />
          <label htmlFor="single-mode" className={styles.mode_label}>
            <img src={ISingle} className={styles.mode_img} alt="" />
            <p
              className={`${styles.mode_text} ${
                activeGenres["singleplayer"] ? styles.active : ""
              }`}
            >
              Одиночная
            </p>
          </label>
        </div>

        <div className={styles.mode_checkbox}>
          <input
            onClick={toggleActive}
            value="cooperative"
            type="checkbox"
            id="cooperative-mode"
            className={styles.hidden_checkbox}
            onChange={(e) => handleModeChange("cooperative", e.target.checked)}
            checked={selectedModes.includes("cooperative")}
          />
          <label htmlFor="cooperative-mode" className={styles.mode_label}>
            <img src={IСooperative} className={styles.mode_img} alt="" />
            <p
              className={`${styles.mode_text} ${
                activeGenres["cooperative"] ? styles.active : ""
              }`}
            >
              Кооператив
            </p>
          </label>
        </div>

        <div className={styles.mode_checkbox}>
          <input
            onClick={toggleActive}
            value="network"
            type="checkbox"
            id="network-mode"
            className={styles.hidden_checkbox}
            onChange={(e) => handleModeChange("network", e.target.checked)}
            checked={selectedModes.includes("network")}
          />
          <label htmlFor="network-mode" className={styles.mode_label}>
            <img src={INetwork} className={styles.mode_img} alt="" />
            <p
              className={`${styles.mode_text} ${
                activeGenres["network"] ? styles.active : ""
              }`}
            >
              Сетевая
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterMode;
