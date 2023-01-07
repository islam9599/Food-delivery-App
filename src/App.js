import React, { Fragment } from "react";
import Cart from "./components/Cart/Cart.jsx";
import Header from "./components/Layout/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header></Header>
      <Meals />
    </Fragment>
  );
}

export default App;
