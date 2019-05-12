import React, { Component } from "react";
import Donut from "./components/donut";

import Grid from '@material-ui/core/Grid';

import { getAccountDetails } from 'optus-core/account'

import './dashboard.scss';

class Dashboard extends Component {
	state = {
		cards: []
	}
	componentDidMount() {
		var account = getAccountDetails();
		this.setState({
			'account': account.account,
			'cards': account.cards
		});
	}

	render() {
		return (
			<div className="dashboard">
				<h1>Welcome, test</h1>

				<Grid container spacing={16}>
					<Grid item md={6} xs={12} >
						<div className="section">
							<h2>Account details</h2>
							<div className="account-details">
								{this.state.account ? Object.keys(this.state.account).map((key, index) => {
								return <div className="account-values">
									<p className="key pull-left"><strong>{key}</strong></p>
									<p className="value pull-right">{this.state.account[key]}</p>
									<div className="clearfix"></div>
								</div>
								}) : ''}
								<br></br>
								<h3>Card details</h3>
								{this.state.cards ? this.state.cards.map((card) => {
									return <div className="card-box">
										<p className="expiry">06/06</p>
										<p className="number">{card}</p>
										<p className="name">Gian Johansen</p>
									</div>
								}) : ''}
							</div>
						</div>
					</Grid>
					<Grid item md={6} xs={12} >
						<div className="section text-center">
							<h2 className="mb-60">Your usage</h2>
							<Donut />
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Dashboard
