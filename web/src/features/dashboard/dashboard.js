import React, { Component } from "react";
import Donut from "./components/donut";
import Grid from '@material-ui/core/Grid';
import './dashboard.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'optus-core/actions'

class Dashboard extends Component {
	state = {
		cards: [],
		selectedCard: 0,
		usages: []
	}

	onCheckUsage() {
		this.props.history.push('/usage-breakdown-list');
	}

	onItemClick(index){
		this.setState({ selectedCard: index });
	}

	componentDidMount() {
		if (!this.props.account) {
			this.props.history.push("/");
		}
	}

	render() {
		var usage = this.props.usages ? this.props.usages[this.state.selectedCard] : null,
			selectedCard = this.props.cards ? this.props.cards[this.state.selectedCard] : 0

		return (
			<div className="dashboard">
				<h1>Welcome, Gian</h1>

				<Grid container spacing={16}>
					<Grid item md={6} xs={12} >
						<div className="section">
							<h2>Account details</h2>
							<div className="account-details">
								{this.props.account ? Object.keys(this.props.account).map((key, index) => {
								return <div className="account-values">
									<p className="key pull-left"><strong>{key}</strong></p>
									<p className="value pull-right">{this.props.account[key]}</p>
									<div className="clearfix"></div>
								</div>
								}) : ''}
								<br></br>
								<h3>Card details</h3>
								{this.props.cards ? this.props.cards.map((card, index) => {
									return <div className="card-box" data-id="{index}" onClick={this.onItemClick.bind(this, index)}>
										<p className="expiry">{index * 2}/06</p>
										<p className="number">{card}</p>
										<p className="name">Gian Johansen</p>
									</div>
								}) : ''}
							</div>
						</div>
					</Grid>
					<Grid item md={6} xs={12} >
						<div className="section text-center">
							<h2>Your usage for</h2>
							<p className="mb-60">{selectedCard}</p>
							<Donut onCheckUsage={this.onCheckUsage.bind(this)} donutval={usage} />
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
    let authenticated = state.account.authenticated;
	let account = state.account.account.account;
	let cards = state.account.account.cards;
	let usage = state.account.account.usage;
	console.log(state);
    return {
		'authenticated': authenticated,
		'account': account,
		'cards': cards,
		'usage': usage
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

