import React from "react";
import { Route, Switch } from "react-router-dom";
import CatBreeds from "./Containers/CatBreeds/CatBreeds";
import CatSearchImg from "./Containers/CatSearchImg/CatSearchImg";
import Navigation from "./Components/Navigation/Navigation";
import CatBase from "./Containers/CatBase/CatBase";

export default function App() {
	return (
		<div>
			<Navigation />
			<Switch>
				<Route path='/breeds' component={CatBreeds}></Route>
				<Route path='/imgsearch' component={CatSearchImg}></Route>
				<Route path='/' component={CatBase}></Route>
			</Switch>
		</div>
	);
}
