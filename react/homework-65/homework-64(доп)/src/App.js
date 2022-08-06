import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ToDo from "./containers/ToDo/ToDo";
import Films from "./containers/Films/Films";
import PersonalNotes from "./containers/PersonalNotes/Home/Home";
import NotesForm from "./containers/PersonalNotes/NotesForm/NotesForm";

export default function App() {
	return (
		<Fragment>
			<Navigation />
			<Switch>
				<Route path='/films' component={Films} />
				<Route path='/notes/add' component={NotesForm} />
				<Route path='/notes/:id' render={(props) => <NotesForm {...props} btn="Edit" headline="Edit note" />} />
				<Route path='/notes' component={PersonalNotes} />
				<Route path={"/" || "/todo"} component={ToDo} />
			</Switch>
		</Fragment>
	);
}
