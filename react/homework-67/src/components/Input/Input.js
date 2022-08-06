import React from "react";
import classes from "./Input.module.css";

export default ({ value }) => {
  return (
    <div>
      <input
        type="text"
        className={classes.Input}
        value={value}
        readOnly={true}
      />
    </div>
  );
};
