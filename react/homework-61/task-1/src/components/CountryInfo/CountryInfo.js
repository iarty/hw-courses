import React, { Component } from "react";
import classes from "./CountryInfo.module.css";
import axios from "../../axios";
import Borders from "./Borders/Borders";
import Preloader from "../UI/Preloader/Preloader";

export default class CountryInfo extends Component {
	state = {
		countryInfo: {},
		loading: false,
		show: false
	};

	async componentDidUpdate(prevProps) {
		if (this.props.selectedCountry && this.props.selectedCountry !== prevProps.selectedCountry) {
			if (!this.props.preloader) {
				this.setState({ loading: true });
			}
			const response = await axios.get(`name/${this.props.selectedCountry}?fullText=true`);
			const countryInfo = response.data[0];
			this.setState({ countryInfo });
		}
	}

	loadHandler = () => {
		this.setState({ loading: false, show: true });
	};

	render() {
		let cls = [classes.hide];
		if (!this.state.loading && this.state.show) {
			cls = [classes.show];
		}
		const country = this.state.countryInfo;
		return (
			<section className={classes.CountryInfo}>
				<div className={cls}>
					<img style={{ float: "right" }} src={country.flag} alt='flag' width='250px' />
					<h2>{country.name}</h2>
					<div>
						<p>
							<strong>Population: </strong>
							{country.population}
						</p>
						<p>
							<strong>Region: </strong>
							{country.region}
						</p>
						<p>
							<strong>Subregion: </strong>
							{country.subregion}
						</p>
						<p>
							<strong>Area: </strong>
							{country.area}
						</p>
					</div>
					<div>
						<Borders borders={this.state.countryInfo.borders} loading={this.loadHandler} />
					</div>
				</div>
				{this.state.loading && <Preloader />}
			</section>
		);
	}
}
