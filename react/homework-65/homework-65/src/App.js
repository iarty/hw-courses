import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import FormDataHandler from "./containers/FormDataHandler/FormDataHandler";
import Page from "./containers/Page/Page";

export default function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/pages/admin' component={FormDataHandler} />
				<Route path='/pages/:name' component={Page} />
				<Route path='/pages' component={Page} exact />
				<Redirect to='/pages' />
			</Switch>
		</Layout>
	);
}
