import React from "react";
import Input from "../../UI/Input";
import classes from "./Form.module.css";

export const Form = (props) => {
  return (
    <form className={classes.form} action="">
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
