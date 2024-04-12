import React from "react";
import styles from "../../MainSupport.module.css";
import { Route, Router, Routes } from "react-router-dom";
import SupportMenu from "../../SupportMenu/SupportMenu";
// import SupportProducts from "./SupportProducts";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import SupportPayments from "./SupportPayments";
import { PopularQuestionsDate } from "../../../../../data/support/PopularQuestionsData";
import { Payments } from "../../../../../data/support/PaymentsData";

export default function SupportPaymentsComp() {
  return (
    <div>
      <Header />
      <div className={`${styles.main_support} flex-col`}>
        <SupportMenu />
        <div>
          {Payments.map((card) => (
            <SupportPayments card={card} key={card.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
