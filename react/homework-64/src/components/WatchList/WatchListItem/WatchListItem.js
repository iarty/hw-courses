import React from "react";
import Input from "../../UI/Input/Input";
import classes from "./WatchListItem.module.css";
import Btn from "../../UI/Btn/Btn";
export default function WatchListItem({ onChange, value, removeFilm, saveFilm }) {
	return (
		<div className={classes.WatchListItem}>
			<Input value={value} onChange={onChange} />
			<Btn type='save' onClick={saveFilm} />
			<Btn type='close' onClick={removeFilm} />
		</div>
	);
}
