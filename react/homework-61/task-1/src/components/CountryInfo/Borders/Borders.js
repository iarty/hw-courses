import React, { Component, Fragment } from "react";
import axios from "../../../axios";

export default class Borders extends Component {
	state = {
		borders: []
	};

	async componentDidUpdate(prevProps) {
		if (this.props.borders && this.props.borders !== prevProps.borders) {
			const promise = await Promise.all(
				this.props.borders.map(border => axios.get(`/alpha/${border}`))
			);
			const borders = promise.map(item => item.data.name);
      this.setState({ borders });
      this.props.loading()
		}
	}

	render() {
		return (
			<Fragment>
				<br />
				<strong>Borders with:</strong>
				<ul>
					{this.state.borders.map((border, index) => (
						<li key={index}>{border}</li>
					))}
				</ul>
			</Fragment>
		);
	}
}
