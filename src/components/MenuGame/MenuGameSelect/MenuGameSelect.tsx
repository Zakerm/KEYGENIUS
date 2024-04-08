import React from "react";
import "../MenuGameSelect/MenuGameSelect.css";

export default function MenuGameSelect() {
  return (
    <div className="MenuGame_select ">
      <ul className="select flex flex-row  justify-center gap-5 ">
        <div className="link">
          {" "}
          <a href="#!">
            <li className="MenuGame__title">Снижение цен</li>
          </a>
        </div>

        <div className="link">
          <a href="#!">
            <li className="MenuGame__title">Лидеры продаж</li>
          </a>
        </div>

        <div className="link">
          <a href="#!">
            <li className="MenuGame__title">Новые игры</li>
          </a>
        </div>

        <div className="link">
          <a href="#!">
            <li className="MenuGame__title">Рекомендованные игры</li>
          </a>
        </div>
      </ul>
    </div>
  );
}
