import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import {  Login, Dashboard } from "../../features";
import { HeaderApp } from "../../features";
import { Footer } from "../../features";
import Grid from '@material-ui/core/Grid';

export default class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>	
    				<Grid container spacing={16}>
						<HeaderApp />
						<Switch>
							<Route exact path="/dashboard" component={Dashboard} />
							<Route exact path="/" component={Login} />
							<Redirect from="*" to="/" />
						</Switch>
					</Grid>		
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}
