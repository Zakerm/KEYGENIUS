import React from "react";
import HeaderLogo from "./content/HeaderLogo";
import HeaderNav from "./content/HeaderNav";
import HeaderRight from "./content/HeaderRight";

export default function HeaderContent() {
  return (
    <div className="header__content">
      <HeaderLogo />
      <HeaderNav />
      <HeaderRight />
    </div>
  );
}
