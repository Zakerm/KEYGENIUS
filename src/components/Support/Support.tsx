import React, { useEffect } from "react";
import styles from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainSupport from "./MainSupport/MainSupport";

export default function Support() {
  useEffect(() => {
    document.title = `Техническая поддержка`;
  });
  return (
    <div>
      <Header />
      <MainSupport />
      <Footer />
    </div>
  );
}
