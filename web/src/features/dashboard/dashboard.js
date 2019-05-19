import React, { Component } from "react";
import Billing from "./components/billing";
import Donut from "./components/donut";
import UsageBreakdownList from "./components/usage-breakdown-list";
import Grid from '@material-ui/core/Grid';
import './dashboard.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'optus-core/actions'

class Dashboard extends Component {
	constructor(props) {
		super(props);
	
		// Set the state directly. Use props if necessary.
		this.state = {
			cards: [],
			selectedCard: 0,
			usages: [],
			activeTab: 1,
			viewBreakdown: false
		}
	}

	backToUsage() {
		this.setState({ viewBreakdown: false});
	}

	onCheckUsage() {
		this.setState({ viewBreakdown: true});
	}

	onItemClick(index){
		this.setState({ selectedCard: index });
	}

	onTabClick(index){
		this.setState({ activeTab: index });
	}

	billing = {
		amountDue: 23.60,
		dueDate: '20 May 2019',
		recentCharges: [
			{
				period: "11 Jan - 10 Feb",
				value: 34.18,
				percentage: 58.70
			},
			{
				period: "11 Feb - 10 Mar",
				value: 23.09,
				percentage: 39.65
			},
			{
				period: "11 Mar - 10 Apr",
				value: 58.23,
				percentage: 100
			},
			{
				period: "11 Apr -10 May",
				value: 23.60,
				percentage: 40.53
			}
		]
	}

	usageBreakdown = [
		{
			name: 'Browsing',
			percentage: 45.8
		},
		{
			name: 'Spotify',
			percentage: 10.4
		},
		{
			name: 'Google Play',
			percentage: 6.9
		},
		{
			name: 'Google Generic',
			percentage: 5.3
		},
		{
			name: 'Youtube',
			percentage: 4.4
		},
		{
			name: 'Other usage',
			percentage: 27.2
		}
	]
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
					<Grid item md={7} xs={12} >
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
									return <div className="card-box" key={index} data-id="{index}" onClick={this.onItemClick.bind(this, index)}>
										<p className="icon"><i className="material-icons">perm_device_information</i></p>
										<p className="name">Gian Johansen</p>
										<p className="number">Account number {card}</p>
									</div>
								}) : ''}
							</div>
						</div>

						<div className="tabs">
							<div onClick={this.onTabClick.bind(this, 1)} className={this.state.activeTab === 1 ?  'active' : ''}>Usage</div>
							<div onClick={this.onTabClick.bind(this, 2)} className={this.state.activeTab === 2 ?  'active' : ''}>Billing</div>
							<div className="tab empty"></div>
						</div>

						<div className="tabsContent">
							<div className={this.state.activeTab === 1 ?  'active' : ''}>
								<div className={this.state.viewBreakdown?  'hide' : 'show'}>
									<h2>Your usage for</h2>
									<p className="mb-60">{selectedCard}</p>
									<Donut onCheckUsage={this.onCheckUsage.bind(this)} donutval={usage} />
								</div>
								<div className={this.state.viewBreakdown?  'show' : 'hide'}>
									<UsageBreakdownList usageBreakdown={this.usageBreakdown} backToUsage={this.backToUsage.bind(this)}/>
								</div>
							</div>
							<div className={this.state.activeTab === 2 ?  'active' : ''}>
								<Billing amountDue={this.billing.amountDue} dueDate={this.billing.dueDate} recentCharges={this.billing.recentCharges}/>
							</div>
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

