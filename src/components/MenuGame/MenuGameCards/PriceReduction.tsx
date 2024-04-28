import React from "react";
import { GameCards } from "../../../data/MenuGameCards";
import styles from "./MenuGameCards.module.css";
import { IGameCards } from "../../../models/GameCardsModels";
import MenuGameCard from "./MenuGameCard/MenuGameCard";

export default function PriceReduction() {
  // Фильтруем карточки с скидками и имеющие процент скидки
  const cardsWithDiscount: IGameCards[] = GameCards.filter(
    (card) => card.discount && card.discount.percent
  );

  // Сортируем карточки по убыванию процента скидки
  cardsWithDiscount.sort((a, b) => b.discount!.percent! - a.discount!.percent!);

  // Выбираем до 10 карточек с самым большим значением процента скидки
  const topCards = cardsWithDiscount.slice(0, 10);

  return (
    <div className={`${styles.MenuGame_cards} flex flex-wrap`}>
      {topCards.map((card) => (
        <MenuGameCard card={card} key={card.id} />
      ))}
    </div>
  );
}
