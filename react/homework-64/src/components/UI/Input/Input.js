import React from "react";
import classes from "./Input.module.css";

export default function Input({ onChange, label, value, name }) {
	return (
		<div className={classes.InputGroup}>
			<input
				name={name}
				className={classes.Input}
				type='text'
				value={value}
				onChange={onChange}
				required
			/>
			<span className={classes.InputBar}></span>
			{label ? <label className={classes.Label}>{label}</label> : null}
		</div>
	);
}
