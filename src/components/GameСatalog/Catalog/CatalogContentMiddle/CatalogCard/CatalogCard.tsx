import React from "react";
import styles from "./CatalogCard.module.css";
import { IGameCards } from "../../../../../models/GameCardsModels";
import { Link } from "react-router-dom";

interface CatalogCardProps {
  card: IGameCards;
}

export default function CatalogCard(props: CatalogCardProps) {
  const genres = props.card.filter?.genreRU
    ? props.card.filter.genreRU.join(",")
    : "";
  return (
    <Link to={`/game/${props.card.id}`}>
      <div className={`${styles.catalog_card} flex flex-row`}>
        <div className={styles.catalog_card__img}>
          <img
            src={props.card.image}
            className={styles.catalog_card__img}
            alt=""
          />
        </div>
        <div className={`${styles.catalog_card_info} flex flex-col`}>
          <div className={styles.catalog_card_title}>
            <h2>{props.card.title}</h2>
          </div>
          <div className={`${styles.catalog_card_sub} flex`}>
            <div className={styles.platform}>
              <img
                src={props.card.platform}
                className={styles.catalog_card_platform}
                alt=""
              />
            </div>
            <div className={styles.card_game_genre}>
              <p>{genres}</p>
            </div>
          </div>
        </div>
        <div className={`${styles.card_game_price} flex items-center  `}>
          <p>{props.card.price}</p>
          <p>{props.card.currency}</p>
        </div>
      </div>
    </Link>
  );
}
