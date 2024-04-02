import React from "react";
import PageInfo from "./PageInfo/PageInfo";
import { GameCards } from "../../../data/MenuGameCards";
import { IGameCards } from "../../../models/GameCardsModels";

interface GamePageInfoProps {
  game: IGameCards; // Передаем данные о карточке в props
}

const GamePageInfo: React.FC<GamePageInfoProps> = ({ game }) => {
  return (
    <div>
      <PageInfo info={game} />{" "}
      {/* Передаем данные о карточке в компонент PageInfo */}
    </div>
  );
};

export default GamePageInfo;
