import React from "react";
import { GameCards } from "../../../data/MenuGameCards";
import styles from "./MenuGameCards.module.css";
import MenuGameCard from "./MenuGameCard/MenuGameCard";
import { IGameCards } from "../../../models/GameCardsModels";

export default function TopSale() {
  // Сортируем карточки по убыванию numberSales
  const topSalesCards: IGameCards[] = [...GameCards].sort((a, b) => {
    const aSales = a.numberSales ?? 0;
    const bSales = b.numberSales ?? 0;
    return bSales - aSales;
  });

  // Выбираем до 10 карточек с самым большим значением numberSales
  const topCards = topSalesCards.slice(0, 10);

  return (
    <div className={`${styles.MenuGame_cards} flex flex-wrap`}>
      {topCards.map((card) => (
        <MenuGameCard card={card} key={card.id} />
      ))}
    </div>
  );
}
