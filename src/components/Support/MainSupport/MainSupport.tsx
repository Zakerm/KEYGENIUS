import React from "react";
import SupportMenu from "./SupportMenu/SupportMenu";
import styles from "./MainSupport.module.css";
import { Route, Router, Routes } from "react-router-dom";
import { PopularQuestionsDate } from "../../../data/support/PopularQuestionsData";
import PopularQuestions from "./Content/PopularQuestions/PopularQuestions";
import SupportProducts from "./Content/SupportProducts/SupportProducts";
import Header from "../../Header/Header";

export default function MainSupport() {
  return (
    <div className={`${styles.main_support} flex-col`}>
      <SupportMenu />
      <PopularQuestionsList />
    </div>
  );
}

// Component to render popular questions
function PopularQuestionsList() {
  return (
    <div>
      {PopularQuestionsDate.map((cards) => (
        <PopularQuestions cards={cards} key={cards.id} />
      ))}
    </div>
  );
}
