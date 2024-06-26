import React from "react";
import FooterLogo from "../../img/main/header/logo.png";
import styles from "./Footer.module.css";

// footer flex flex-col justify-center items-center
export default function Footer() {
  return (
    <footer
      className={`${styles.footer} flex flex-col justify-center items-center `}
    >
      <div className={styles.footer_logo}>
        <img
          className={styles.footer_logo_img}
          src={FooterLogo}
          alt="FooterLogo"
        />
      </div>
      <div className={styles.footer_copyright}>
        <p className={styles.copyright}>© 2024 KEYGENIUS</p>
      </div>
    </footer>
  );
}
