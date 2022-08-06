import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
	return (
			<button type="submit" className={classes.InputGroupBtn}>
				{props.children}
			</button>
	);
}
