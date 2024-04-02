import React from "react";
import MenuGameCard from "./MenuGameCard/MenuGameCard";
import { GameCards } from "../../../data/MenuGameCards";

export default function MenuGameCards() {
  return (
    <div className="MenuGame_cards flex flex-wrap">
      {GameCards.map((card) => (
        <MenuGameCard card={card} key={card.id} />
      ))}
    </div>
  );
}
