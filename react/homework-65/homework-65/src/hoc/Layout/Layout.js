import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";

class Layout extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<main className='container mt-5'>{this.props.children}</main>
			</div>
		);
	}
}

export default Layout;
