import React, { useState } from "react";
import { Link } from "react-router-dom"; // Импорт Link из React Router
import styles from "./HeaderSearch.module.css";
import { IGameCards } from "../../../../../../models/GameCardsModels";
import { GameCards } from "../../../../../../data/MenuGameCards";

export default function HeaderSearch() {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<IGameCards[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleIconClick = () => {
    setIsActive(!isActive);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchValue("");
    setSuggestions([]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);

    const results = GameCards.filter(
      (card) =>
        card.title &&
        card.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(results);

    setShowSuggestions(inputValue !== "" && results.length > 0);
  };

  const handleSuggestionClick = (suggestion: IGameCards) => {
    setSearchValue(suggestion.title || "");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    suggestion: IGameCards
  ) => {
    if (event.key === "Enter") {
      setSearchValue(suggestion.title || "");
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  return (
    <div
      className={`${styles.header__search} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.icon} onClick={handleIconClick}></div>
      {isActive && (
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Поиск"
            id="Search"
            value={searchValue}
            onChange={handleChange}
          />
          {isActive && (
            <span onClick={clearSearch} className={styles.clear}></span>
          )}
        </div>
      )}

      {showSuggestions && (
        <ul className={styles.suggestions}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              onKeyDown={(event) => handleKeyDown(event, suggestion)}
              tabIndex={0}
              className={styles.card}
            >
              {/* Используем Link для перехода на страницу карточки по ID */}
              <Link to={`/game/${suggestion.id}`}>
                <div>
                  <img
                    src={suggestion.image}
                    alt={suggestion.title}
                    className={styles.suggestionImage}
                  />
                </div>
                <div>
                  <p>{suggestion.title}</p>
                  <p>
                    {suggestion.price} {suggestion.currency}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
