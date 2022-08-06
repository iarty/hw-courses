import React, { Fragment } from "react";
import classes from "./Btn.module.css";

export default function Close({ onClick, type }) {
	const cls = [
		"fas",
		type === "close" ? "fa-window-close" : type === "save" ? "fa-check" : "fa-edit"
	];
	return (
		<Fragment>
			<button className={classes.Btn} onClick={onClick}>
				<i className={cls.join(' ')}></i>
			</button>
		</Fragment>
	);
}
