import React, { Component } from "react";
import CountriesList from "../../components/CountriesList/CountriesList";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import classes from "./Countries.module.css";
import axios from "../../axios";

export default class Countries extends Component {
	state = {
		countries: [],
		selectedCountry: "",
		loading: true
	};

	async componentDidMount() {
		const response = await axios.get();
		const countries = response.data.map(country => ({ name: country.name, flag: country.flag }));
		this.setState({ countries, loading: false });
	}

	clickHandler = name => {
		this.setState({ selectedCountry: name });
	};

	render() {
		return (
			<section className={classes.Countries}>
				<CountriesList
					selectCountry={this.clickHandler}
					countries={this.state.countries}
					preloader={this.state.loading}
				/>
				<CountryInfo selectedCountry={this.state.selectedCountry} preloader={this.state.loading} />
			</section>
		);
	}
}
