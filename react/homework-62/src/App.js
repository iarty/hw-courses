import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contacts from "./containers/Contacts/Contacts";

export default function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/contacts' component={Contacts}></Route>
				<Route path='/portfolio' component={Portfolio}></Route>
				<Route path='/' component={Home}></Route>
			</Switch>
		</Layout>
	);
}
