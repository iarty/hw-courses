import React from "react";
import Button from "../Button/Button";
const keyArr = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  "0",
  "C",
  ".",
  "/",
  "="
];

export default props => {
  return (
    <div className="d-flex flex-wrap justify-content-end">
      {keyArr.map((key, index) => {
        return (
          <Button key={index} onClick={props.clickHandler}>
            {key}
          </Button>
        );
      })}
    </div>
  );
};
