import React from "react";
import { IGameCards } from "../../../../models/GameCardsModels";
import styles from "./MenuGameCard.module.css";
import { Link } from "react-router-dom";

interface GameCardProps {
  card: IGameCards;
}

export default function MenuGameCard(props: GameCardProps) {
  return (
    <Link className={styles.MenuGame_card_link} to={`/game/${props.card.id}`}>
      <div
        className={`${styles.MenuGame_card} bg-white flex flex-col shadow-2xl`}
      >
        <div className={styles.MenuGame_card_img}>
          <img
            className={`${styles.card_img} w-full`}
            src={props.card.image}
            alt=""
          />
        </div>
        <div
          className={`${styles.MenuGame_card_info} flex flex-row items-center py-0.5 pl-1`}
        >
          <div className={styles.MenuGame_card_icon}>
            <img
              className={styles.platform_img}
              src={props.card.platform}
              alt=""
            />
          </div>
          <div className={`${styles.MenuGame_card_price} pr-1`}>
            <p className="">
              {props.card.price} {props.card.currency}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
