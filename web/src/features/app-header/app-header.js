import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';


import './app-header.scss';

export default function HeaderApp() {
	return ( 
      <Grid item xs={12}>
          <div className="optus-nav">
            <div className="">
              <img src="https://www.comparetv.com.au/wp-content/uploads/2018/11/provider-optus-logo-big.png"></img>
            </div>
          </div>
      </Grid>
    )

}