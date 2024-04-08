import React from "react";
import styles from "./FilterGenre.module.css";

export default function FilterGenre() {
  return (
    <div className={`${styles.filter_genre} `}>
      <div className={styles.genre_title}>Жанры</div>
      <div className={`${styles.unit} flex flex-wrap`}>
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              id="mlt-action"
              data-data="action"
            />
            <span className={styles.filter_genre__label}>Экшены</span>
          </label>
        </div>
        {/* action */}
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              id="mlt-race"
              data-data="race"
            />
            <span className={styles.filter_genre__label}>Гонки</span>
          </label>
        </div>
        {/* race */}
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              id="mlt-strategies"
              data-data="strategies"
            />
            <span className={styles.filter_genre__label}>Гонки</span>
          </label>
        </div>
        {/* strategies */}
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              id="mlt-rpg"
              data-data="rpg"
            />
            <span className={styles.filter_genre__label}>RPG</span>
          </label>
        </div>
        {/* RPG */}
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              id="mlt-simulator"
              data-data="simulator"
            />
            <span className={styles.filter_genre__label}>Симуляторы</span>
          </label>
        </div>
        {/* simulator */}
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              id="mlt-adventures"
              data-data="adventures"
            />
            <span className={styles.filter_genre__label}>Приключения</span>
          </label>
        </div>
        {/* adventures */}
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              id="mlt-sport"
              data-data="sport"
            />
            <span className={styles.filter_genre__label}>Спорт</span>
          </label>
        </div>
        {/* sport */}
        <div className={styles.filter__unit}>
          <label className="filter__checkbox">
            <input
              type="checkbox"
              className="filter__control"
              id="mlt-casual"
              data-data="casual"
            />
            <span className={styles.filter_genre__label}>Казуальные</span>
          </label>
        </div>
      </div>
    </div>
  );
}
