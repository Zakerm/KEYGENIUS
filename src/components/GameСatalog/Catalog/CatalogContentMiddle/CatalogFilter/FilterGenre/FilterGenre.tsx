import React, { useEffect, useState } from "react";
import styles from "./FilterGenre.module.css";

interface FilterGenreProps {
  onFilterChange: (filterName: string, value: string[]) => void;
}

const FilterGenre: React.FC<FilterGenreProps> = ({ onFilterChange }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  useEffect(() => {
    setSelectedGenres([]); // Обнуляем состояние при изменении фильтров
  }, []);

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

  return (
    <div className={`${styles.filter_genre} `}>
      <div className={styles.genre_title}>Жанры</div>
      <div className={`${styles.unit} flex flex-wrap`}>
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              onChange={(e) => handleGenreChange("action", e.target.checked)}
              checked={selectedGenres.includes("action")}
            />
            <span className={styles.filter_genre__label}>Экшены</span>
          </label>
        </div>

        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              onChange={(e) =>
                handleGenreChange("adventures", e.target.checked)
              }
              checked={selectedGenres.includes("adventures")}
            />
            <span className={styles.filter_genre__label}>Приключения</span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              onChange={(e) => handleGenreChange("indie", e.target.checked)}
              checked={selectedGenres.includes("indie")}
            />
            <span className={styles.filter_genre__label}>Инди</span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              onChange={(e) => handleGenreChange("race", e.target.checked)}
              checked={selectedGenres.includes("race")}
            />
            <span className={styles.filter_genre__label}>Гонки</span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              onChange={(e) => handleGenreChange("RPG", e.target.checked)}
              checked={selectedGenres.includes("RPG")}
            />
            <span className={styles.filter_genre__label}>RPG</span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              onChange={(e) => handleGenreChange("simulator", e.target.checked)}
              checked={selectedGenres.includes("simulator")}
            />
            <span className={styles.filter_genre__label}>Симуляторы</span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              onChange={(e) => handleGenreChange("sport", e.target.checked)}
              checked={selectedGenres.includes("sport")}
            />
            <span className={styles.filter_genre__label}>Спорт</span>
          </label>
        </div>
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              onChange={(e) => handleGenreChange("casual", e.target.checked)}
              checked={selectedGenres.includes("casual")}
            />
            <span className={styles.filter_genre__label}>Казуальные</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterGenre;
