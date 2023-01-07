import React, { Fragment } from "react";
import Header from "./components/Layout/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Meals />
    </Fragment>
  );
}

export default App;
