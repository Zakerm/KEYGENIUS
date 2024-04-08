import React from "react";
import HeaderLogo from "./content/HeaderLogo/HeaderLogo";
import HeaderNav from "./content/HeaderNav/HeaderNav";
import HeaderRight from "./content/HeaderRight/HeaderRight";
import styles from "./HeaderContent.module.css";

export default function HeaderContent() {
  return (
    <div className={styles.header__content}>
      <HeaderLogo />
      <HeaderNav />
      <HeaderRight />
    </div>
  );
}
