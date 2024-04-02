import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent/HeaderContent";
import "../../css/general.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <HeaderContent />
      </div>
    </header>
  );
}
