import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={classes.button}
      type={props.type || "button"}
    >
      {props.text}
    </button>
  );
}
