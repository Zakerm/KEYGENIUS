import React from "react";
import styles from "../../MainSupport.module.css";
import { Route, Router, Routes } from "react-router-dom";
import SupportMenu from "../../SupportMenu/SupportMenu";
// import SupportProducts from "./SupportProducts";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import SupportProblems from "./SupportProblems";
import { Problems } from "../../../../../data/support/ProblemsData";

export default function SupportProblemsComp() {
  return (
    <div>
      <Header />
      <div className={`${styles.main_support} flex-col`}>
        <SupportMenu />
        <div className={styles.support_tittle}>
          <h2>Продукты</h2>
        </div>
        <div>
          {Problems.map((card) => (
            <SupportProblems card={card} key={card.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
