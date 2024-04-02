import React, { useEffect } from "react";
import Header from "../Header/Header";
import GamePageInfo from "./GamePageInfo/GamePageInfo";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { GameCards } from "../../data/MenuGameCards";
import { IGameCards } from "../../models/GameCardsModels";

export default function GamePage() {
  const { id } = useParams<{ id: string }>();
  const gameId = parseInt(id!);
  const game = GameCards.find((game: IGameCards) => game.id === gameId);
  // const history = useHistory();

  useEffect(() => {
    // При монтировании компонента прокручиваем страницу вверх
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      {game && <GamePageInfo game={game} />}
      <Footer />
    </div>
  );
}
