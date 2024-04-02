import React from "react";
import "../MenuGameSelect/MenuGameSelect.css";

export default function MenuGameSelect() {
  return (
    <div className="MenuGame_select">
      <ul className="flex flex-row  justify-center gap-14">
        <a href="#!">
          <li className="MenuGame__title">Снижение цен</li>
        </a>
        <a href="#!">
          <li className="MenuGame__title">Лидеры продаж</li>
        </a>
        <a href="#!">
          <li className="MenuGame__title">Новые игры</li>
        </a>
        <a href="#!">
          <li className="MenuGame__title">Рекомендованные игры</li>
        </a>
      </ul>
    </div>
  );
}
