import React from "react";
import Grid from '@material-ui/core/Grid';

import './app-header.scss';

export default function HeaderApp() {
	return (
		<Grid container spacing={0}>
			<Grid item xs={12}>
				<div className="optus-nav">
					<img src="https://www.comparetv.com.au/wp-content/uploads/2018/11/provider-optus-logo-big.png"></img>
				</div>
			</Grid>
		</Grid>
	)
}