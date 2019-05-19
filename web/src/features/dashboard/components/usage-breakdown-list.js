import React, { Component } from "react";
import _ from 'lodash';
import './usage-breakdown-list.scss';
import UsageBreakdown from "./usage-breakdown";
import UsageDonut from "./usage-donut";

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
		
		render () {
			return (
					<div className="usageBreakdown">
						<a onClick={this.props.backToUsage.bind(this)}>&#60; Back to usage summary</a>
						<h3 className="text-center">Your usage</h3>
						<UsageDonut usageBreakdown={this.props.usageBreakdown}/>
					</div>
			)
		}
}

export default UsageBreakdownList;
