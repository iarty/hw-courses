import React, { Fragment } from "react";
import classes from "./CountriesListItem.module.css";

export default function CountriesListItem({ countries, onClick }) {
	return (
		<Fragment>
			{countries.map((country, index) => (
				<a
					href='/#'
					className={classes.CountriesListItem}
					key={index}
					onClick={() => onClick(country.name)}
				>
					<img src={country.flag} alt='flag' />
					&nbsp;
					{country.name}
				</a>
			))}
		</Fragment>
	);
}
