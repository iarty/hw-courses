import React from "react";
import { MDBInput } from "mdbreact";

const InputPage = ({ type, name, label, handleInputValue, value }) => {
  return (
    <MDBInput type={type} name={name} label={label} onChange={handleInputValue} value={value} required />
  );
}

export default InputPage;