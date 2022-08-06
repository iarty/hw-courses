import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import classes from "./Layout.module.css";

export default class Layout extends Component {
	render() {
		return (
			<div className={classes.Layout}>
				<Navigation />
				<main>{this.props.children}</main>
			</div>
		);
	}
}
