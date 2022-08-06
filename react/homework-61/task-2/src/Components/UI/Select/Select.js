import React, { Fragment } from "react";

export default function Select(props) {
	return (
		<Fragment>
			<select
				className='browser-default custom-select'
				onChange={event => props.onChange(event, props.name)}
			>
				<option hidden>{props.name}</option>
				{props.children}
			</select>
		</Fragment>
	);
}
