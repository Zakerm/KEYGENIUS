import React from "react";
import "./Footer.css";
import FooterLogo from "../../img/main/header/logo.jpg";

export default function Footer() {
  return (
    <footer className="footer flex flex-col justify-center items-center ">
      <div className="footer_logo">
        <img className="footer_logo-img" src={FooterLogo} alt="FooterLogo" />
      </div>
      <div className="footer_copyright">
        <p className="copyright">© 2024 KEYGENIUS</p>
      </div>
    </footer>
  );
}
