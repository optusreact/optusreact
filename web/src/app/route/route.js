import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import {  Login, Dashboard } from "../../features";
import { HeaderApp } from "../../features";
import { Footer } from "../../features";

export default class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>	
					<HeaderApp />
					<div className="main">
						<Switch>
							<Route exact path="/dashboard" component={Dashboard} />
							<Route exact path="/" component={Login} />
							<Redirect from="*" to="/" />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}
