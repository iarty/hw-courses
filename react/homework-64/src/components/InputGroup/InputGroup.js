import React from "react";
import classes from "./InputGroup.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";

export default function InputGroup(props) {
	return (
		<div className={classes.InputGroupWrap}>
			<form className={classes.Form} onSubmit={props.addFilm} action='#'>
				<Input
					name={props.name}
					onChange={props.inputHandler}
					label='Название фильма'
					value={props.inputValue}
				/>
				<Button>Add</Button>
				{props.spinner && <Spinner margin='20px 0' />}
			</form>
		</div>
	);
}
