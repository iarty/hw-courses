import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonPage = props => {
	return (
		<Fragment>
			<MDBBtn onClick={props.searchCat}>{props.children}</MDBBtn>
		</Fragment>
	);
};

export default ButtonPage;
