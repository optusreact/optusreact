import React, { Component } from "react";
import Donut from "./components/donut";
import UsageBreakdownList from "./components/usage-breakdown-list";

class Dashboard extends Component {


	render() {
		return (
			<div>
				<Donut />
				<UsageBreakdownList />
			</div>
		);
	}
}

export default Dashboard
