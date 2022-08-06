import React from "react";
import classes from "./WatchList.module.css";
import WatchListItem from "./WatchListItem/WatchListItem";

export default function WatchList(props) {
	return (
		<div className={classes.WatchList}>
			{props.films.map((film, index) => (
				<WatchListItem
					key={index}
					value={film.name}
					onChange={event => props.inputHandler(event, index, film.id)}
					removeFilm={() => props.removeFilm(film.id)}
					saveFilm={() => props.saveFilm(film.id)}
				/>
			))}
		</div>
	);
}
