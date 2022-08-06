import React, { Fragment } from "react";
import classes from "./Button.module.css";

export default props => {
  return (
    <Fragment>
      <button
        onClick={() => props.onClick(props.children)}
        className={classes.Button}
        style={isNaN(+props.children) ? { background: "#ff7070" } : null}
      >
        {props.children}
      </button>
    </Fragment>
  );
};
