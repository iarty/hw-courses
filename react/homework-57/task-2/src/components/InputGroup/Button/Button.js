import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonPage = () => {
  return (
    <Fragment>
      <MDBBtn type="submit" color="blue" size="sm" className="float-right mt-3" >Add</MDBBtn>
    </Fragment>
  );
}

export default ButtonPage;