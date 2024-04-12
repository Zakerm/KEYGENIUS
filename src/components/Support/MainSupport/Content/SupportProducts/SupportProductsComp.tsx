import React from "react";
import styles from "../../MainSupport.module.css";
import { Route, Router, Routes } from "react-router-dom";
import SupportMenu from "../../SupportMenu/SupportMenu";
import { Products } from "../../../../../data/support/ProductsData";
import SupportProducts from "./SupportProducts";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";

export default function SupportProductsComp() {
  return (
    <div>
      <Header />
      <div className={`${styles.main_support} flex-col`}>
        <SupportMenu />
        <div className={styles.support_tittle}>
          <h2>Продукты</h2>
        </div>
        <div>
          {Products.map((card) => (
            <SupportProducts card={card} key={card.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
