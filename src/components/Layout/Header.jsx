import React, { Fragment } from "react";
import classes from "./Header.module.css";
import image from "../IMG/meals.jpeg";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="Meals.jpeg" />
      </div>
    </Fragment>
  );
};

export default Header;
