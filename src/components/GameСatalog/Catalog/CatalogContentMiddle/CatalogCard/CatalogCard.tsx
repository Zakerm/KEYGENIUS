import React from "react";
import styles from "./CatalogCard.module.css";
import { IGameCards } from "../../../../../models/GameCardsModels";

interface CatalogCardProps {
  card: IGameCards;
}

export default function CatalogCard(props: CatalogCardProps) {
  return (
    <div className={`${styles.catalog_card} flex flex-row`}>
      <div className={styles.catalog_card__img}>
        <img
          src={props.card.image}
          className={styles.catalog_card__img}
          alt=""
        />
      </div>
      <div className={`${styles.catalog_card_info} flex flex-col`}>
        <div className={styles.catalog_card_titlt}>
          <h2>{props.card.title}</h2>
        </div>
        <div className={`${styles.catalog_card_sub} flex`}>
          <div className="">
            <img
              src={props.card.platform}
              className={styles.catalog_card_platform}
              alt=""
            />
          </div>
          <div className={styles.card_game_genre}>
            <p>Экшен</p>
          </div>
        </div>
      </div>
      <div className={`${styles.card_game_price} flex items-center  `}>
        <p>{props.card.price}</p>
        <p>{props.card.currency}</p>
      </div>
    </div>
  );
}
