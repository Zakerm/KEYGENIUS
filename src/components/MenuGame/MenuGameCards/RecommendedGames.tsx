import React from "react";
import { GameCards } from "../../../data/MenuGameCards";
import styles from "./MenuGameCards.module.css";
import MenuGameCard from "./MenuGameCard/MenuGameCard";
import { IGameCards } from "../../../models/GameCardsModels";

export default function TopSale() {
  // Сортируем карточки по убыванию рейтинга (rating)
  const topRatedCards: IGameCards[] = [...GameCards].sort((a, b) => {
    // Check if both 'a.filter' and 'b.filter' exist before accessing 'rating'
    if (a.filter && b.filter && a.filter.rating && b.filter.rating) {
      return b.filter.rating - a.filter.rating;
    }
    // Handle case where 'filter' or 'rating' is undefined
    return 0;
  });

  // Выбираем до 10 карточек с самым большим значением рейтинга
  const topCards = topRatedCards.slice(0, 10);

  return (
    <div className={`${styles.MenuGame_cards} flex flex-wrap`}>
      {topCards.map((card) => (
        <MenuGameCard card={card} key={card.id} />
      ))}
    </div>
  );
}
