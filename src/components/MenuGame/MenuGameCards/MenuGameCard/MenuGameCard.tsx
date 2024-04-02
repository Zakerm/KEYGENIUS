import React from "react";
import { IGameCards } from "../../../../models/GameCardsModels";
import "../../MenuGame.css";
import "../../../../css/general.css";
import { Link } from "react-router-dom";

interface GameCardProps {
  card: IGameCards;
}

export default function MenuGameCard(props: GameCardProps) {
  return (
    <Link className="MenuGame_card-link" to={`/game/${props.card.id}`}>
      <div className="MenuGame_card bg-white flex flex-col   shadow-2xl ">
        <div className="MenuGame_card-img">
          <img className="card-img w-full" src={props.card.image} alt="" />
        </div>
        <div className="MenuGame_card-info flex flex-row items-center py-0.5 pl-1 ">
          <div className="MenuGame_card-icon">
            <img className="platform_img" src={props.card.platform} alt="" />
          </div>
          <div className="MenuGame_card-price pr-1">
            <p className="">
              {props.card.price} {props.card.currency}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
