import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const links = [
	{ to: "/", label: "Home", exact: true },
	{ to: "/portfolio", label: "Portfolio", exact: false },
	{ to: "/contacts", label: "Contacts", exact: false }
];

export default class Navigation extends Component {
	renderLinks() {
		return links.map((link, index) => {
			return (
				<li key={index}>
					<NavLink to={link.to} exact={link.exact} activeClassName={classes.active}>
						{link.label}
					</NavLink>
				</li>
			);
		});
	}
	render() {
		return (
			<div className={classes.Navigation}>
				<span className={classes.logo}>
					John Doe
				</span>
				<nav>
					<ul>{this.renderLinks()}</ul>
				</nav>
			</div>
		);
	}
}
