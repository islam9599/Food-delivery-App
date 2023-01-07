import React from "react";
import { Available } from "./Available";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <Available />
    </>
  );
};

export default Meals;
