import React, { Component } from "react";
import _ from 'lodash';
import './usage-breakdown-list.scss';
import UsageBreakdown from "./usage-breakdown";

class UsageBreakdownList extends Component {
	usageBD = [
		{
			'usageName':'11 days remaining in this cycle',
			'usedVal':'',
			'usedOf':'',
			'completedVal':'36'
		},{
			'usageName':'Roaming Data',
			'usedVal':'0 MB USED',
			'usedOf':'of 4 GB',
			'completedVal':'0'
		},
		{
			'usageName':'Data',
			'dataOffer': 'Get + 1 GB for $10',
			'usedVal':'33.9 GB USED',
			'usedOf':'of 100 GB',
			'completedVal':'34'
		},
		{
			'usageName':'UL Intl Talk & Text(35 countries)',
			'usedVal':'unlimited',
			'usedOf':'',
			'completedVal':'UN'
		},
		{
			'usageName':'Standard national Talk',
			'usedVal':'unlimited',
			'usedOf':'',
			'completedVal':'UN'
		},
		{
			'usageName':'Standard national Text',
			'usedVal':'unlimited',
			'usedOf':'',
			'completedVal':'UN'
		}
		]
		
		usageBDList = _.values(this.usageBD).map(function(usage, ind){
			return <UsageBreakdown keyid = {ind} usage = {usage}/> 
									

		})

		backToDashboard() {
			this.props.history.push('/dashboard');
		}
		
		render () {
			return (
					<div >
						<a onClick={this.backToDashboard.bind(this)}>&#60; Back to previous page</a>
						<h3 className="text-center">Your usage</h3>
						{this.usageBDList}
					</div>
			)
		}
}

export default UsageBreakdownList;
