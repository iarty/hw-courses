import React from "react";
import { MDBInput } from "mdbreact";

const TextareaPage = props => {
	return (
		<MDBInput
			name={props.name}
			type='textarea'
			label='Description'
			rows='5'
			value={props.value}
			onChange={props.onChange}
		/>
	);
};

export default TextareaPage;
