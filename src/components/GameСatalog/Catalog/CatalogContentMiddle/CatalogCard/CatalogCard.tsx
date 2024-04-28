import React from "react";
import styles from "./CatalogCard.module.css";
import { IGameCards } from "../../../../../models/GameCardsModels";
import { Link } from "react-router-dom";

interface CatalogCardProps {
  card: IGameCards;
}

export default function CatalogCard(props: CatalogCardProps) {
  const calculateDiscountedPrice = (): number | undefined => {
    if (props.card.discount && props.card.discount.percent !== undefined) {
      const discountedPrice =
        props.card.price * (1 - props.card.discount.percent / 100);
      return Math.ceil(discountedPrice);
    }
    return undefined;
  };

  const renderDiscount = () => {
    if (props.card.discount && props.card.discount.percent !== undefined) {
      return (
        <div className={styles.discount}>
          <p className={styles.discont}>-{props.card.discount.percent}%</p>
        </div>
      );
    }
    return null; // скрыть блок скидки, если скидки нет или отсутствует процент скидки
  };

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
          {renderDiscount()} {/* Вызов функции для отображения блока скидки */}
          <p>
            {" "}
            {calculateDiscountedPrice() !== undefined
              ? calculateDiscountedPrice()
              : props.card.price}{" "}
          </p>
          <p>{props.card.currency}</p>
        </div>
      </div>
    </Link>
  );
}
