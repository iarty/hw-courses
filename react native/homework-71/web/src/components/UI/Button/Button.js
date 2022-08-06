import React from "react";
import { MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";

const Button = ({ children }) => {
  const history = useHistory();

  return (
    <MDBBtn
      color="primary"
      onClick={() => {
        history.push("/dishes/create");
      }}
    >
      {children}
    </MDBBtn>
  );
};

export default Button;
