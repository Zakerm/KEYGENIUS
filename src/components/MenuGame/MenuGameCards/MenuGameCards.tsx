import React from "react";
import MenuGameCard from "./MenuGameCard/MenuGameCard";
import { GameCards } from "../../../data/MenuGameCards";
import styles from "./MenuGameCards.module.css";

export default function MenuGameCards() {
  // Используем slice(0, 5) для получения первых 5 элементов массива
  const cardsToShow = GameCards.slice(0, 10);

  return (
    <div className={`${styles.MenuGame_cards} flex flex-wrap`}>
      {cardsToShow.map((card) => (
        <MenuGameCard card={card} key={card.id} />
      ))}
    </div>
  );
}
