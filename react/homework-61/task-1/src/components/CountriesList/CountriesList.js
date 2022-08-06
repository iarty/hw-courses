import React from "react";
import classes from "./CountriesList.module.css";
import CountriesListItem from "./CountriesListItem/CountriesListItem";
import Preloader from "../UI/Preloader/Preloader";

export default function CountriesList(props) {
	return (
		<section className={classes.CountriesList}>
			{props.preloader ? (
				<Preloader />
			) : (
				<CountriesListItem onClick={props.selectCountry} countries={props.countries} />
			)}
		</section>
	);
}
