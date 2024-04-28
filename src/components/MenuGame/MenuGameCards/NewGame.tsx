import React from "react";
import { GameCards } from "../../../data/MenuGameCards";
import styles from "./MenuGameCards.module.css";
import MenuGameCard from "./MenuGameCard/MenuGameCard";
import { IGameCards } from "../../../models/GameCardsModels";

export default function NewGame() {
  // Reverse the GameCards array and select the first 10 cards
  const lastTenCards: IGameCards[] = GameCards.slice().reverse().slice(0, 10);

  return (
    <div className={`${styles.MenuGame_cards} flex flex-wrap`}>
      {lastTenCards.map((card) => (
        <MenuGameCard card={card} key={card.id} />
      ))}
    </div>
  );
}
