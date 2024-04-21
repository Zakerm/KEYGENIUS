import React, { useEffect, useState } from "react";
import styles from "./FilterGenre.module.css";

interface FilterGenreProps {
  onFilterChange: (filterName: string, value: string[]) => void;
  resetFilters: boolean;
}

const FilterGenre: React.FC<FilterGenreProps> = ({
  onFilterChange,
  resetFilters,
}) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  useEffect(() => {
    if (resetFilters) {
      setSelectedGenres([]); // Сброс выбранных жанров
      setActiveGenres({});
      onFilterChange("genres", []); // Обновляем состояние фильтра жанров в родительском компоненте
    }
  }, [resetFilters]);

  const handleGenreChange = (genre: string, checked: boolean) => {
    let updatedGenres = [...selectedGenres];
    if (checked) {
      updatedGenres.push(genre);
    } else {
      updatedGenres = updatedGenres.filter((g) => g !== genre);
    }
    setSelectedGenres(updatedGenres);
    onFilterChange("genres", updatedGenres);
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
    <div className={`${styles.filter_genre} `}>
      <div className={styles.genre_title}>Жанры</div>
      <div className={`${styles.unit} flex flex-wrap`}>
        <div className={styles.filter__unit}>
          <label className={styles.filter__checkbox}>
            <input
              type="checkbox"
              onClick={toggleActive}
              value="action"
              className={styles.filter__control}
              onChange={(e) => handleGenreChange("action", e.target.checked)}
              checked={selectedGenres.includes("action")}
            />
            <span
              className={`${styles.filter_genre__label} ${
                activeGenres["action"] ? styles.active : ""
              }`}
            >
              Экшены
            </span>
          </label>
        </div>

        <div className={styles.filter__unit}>
          <label className={styles.filter__checkbox}>
            <input
              type="checkbox"
              value="adventures"
              onClick={toggleActive}
              className={styles.filter__control}
              onChange={(e) =>
                handleGenreChange("adventures", e.target.checked)
              }
              checked={selectedGenres.includes("adventures")}
            />
            <span
              className={`${styles.filter_genre__label} ${
                activeGenres["adventures"] ? styles.active : ""
              }`}
            >
              Приключение
            </span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className={styles.filter__checkbox}>
            <input
              onClick={toggleActive}
              value="indie"
              type="checkbox"
              className={styles.filter__control}
              onChange={(e) => handleGenreChange("indie", e.target.checked)}
              checked={selectedGenres.includes("indie")}
            />
            <span
              className={`${styles.filter_genre__label} ${
                activeGenres["indie"] ? styles.active : ""
              }`}
            >
              Инди
            </span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className={styles.filter__checkbox}>
            <input
              value="race"
              onClick={toggleActive}
              type="checkbox"
              className={styles.filter__control}
              onChange={(e) => handleGenreChange("race", e.target.checked)}
              checked={selectedGenres.includes("race")}
            />
            <span
              className={`${styles.filter_genre__label} ${
                activeGenres["race"] ? styles.active : ""
              }`}
            >
              Гонки
            </span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className={styles.filter__checkbox}>
            <input
              value="RPG"
              onClick={toggleActive}
              type="checkbox"
              className={styles.filter__control}
              onChange={(e) => handleGenreChange("RPG", e.target.checked)}
              checked={selectedGenres.includes("RPG")}
            />
            <span
              className={`${styles.filter_genre__label} ${
                activeGenres["RPG"] ? styles.active : ""
              }`}
            >
              RPG
            </span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className={styles.filter__checkbox}>
            <input
              value="simulator"
              onClick={toggleActive}
              type="checkbox"
              className={styles.filter__control}
              onChange={(e) => handleGenreChange("simulator", e.target.checked)}
              checked={selectedGenres.includes("simulator")}
            />
            <span
              className={`${styles.filter_genre__label} ${
                activeGenres["simulator"] ? styles.active : ""
              }`}
            >
              Симуляторы
            </span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className={styles.filter__checkbox}>
            <input
              value="sport"
              onClick={toggleActive}
              type="checkbox"
              className={styles.filter__control}
              onChange={(e) => handleGenreChange("sport", e.target.checked)}
              checked={selectedGenres.includes("sport")}
            />
            <span
              className={`${styles.filter_genre__label} ${
                activeGenres["sport"] ? styles.active : ""
              }`}
            >
              Спортивные
            </span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className={styles.filter__checkbox}>
            <input
              value="casual"
              onClick={toggleActive}
              type="checkbox"
              className={styles.filter__control}
              onChange={(e) => handleGenreChange("casual", e.target.checked)}
              checked={selectedGenres.includes("casual")}
            />
            <span
              className={`${styles.filter_genre__label} ${
                activeGenres["casual"] ? styles.active : ""
              }`}
            >
              Казуальные
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterGenre;
