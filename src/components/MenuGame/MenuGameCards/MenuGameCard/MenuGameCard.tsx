import React from "react";
import { IGameCards } from "../../../../models/GameCardsModels";
import styles from "./MenuGameCard.module.css";
import { Link } from "react-router-dom";

interface GameCardProps {
  card: IGameCards;
}

export default function MenuGameCard(props: GameCardProps) {
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

  return (
    <Link
      className={`${styles.MenuGame_card_link} `}
      to={`/game/${props.card.id}`}
    >
      <div
        className={`${styles.MenuGame_card} ${styles.catalog_item} bg-white flex flex-col `}
      >
        <div className={styles.MenuGame_card_img}>
          <img
            className={`${styles.card_img} w-full`}
            src={props.card.image}
            alt=""
          />
        </div>
        <div
          className={`${styles.MenuGame_card_info} flex  items-center py-0.5 pl-1`}
        >
          <div className={styles.MenuGame_card_icon}>
            <img
              className={styles.platform_img}
              src={props.card.platform}
              alt=""
            />
          </div>
          {renderDiscount()} {/* Вызов функции для отображения блока скидки */}
          <div className={`${styles.MenuGame_card_price} pr-1`}>
            <p className="">
              {calculateDiscountedPrice() !== undefined
                ? calculateDiscountedPrice()
                : props.card.price}{" "}
              {props.card.currency}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
