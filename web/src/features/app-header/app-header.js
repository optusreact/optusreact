import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import './app-header.scss';

export default function HeaderApp() {
	return ( 
		<div>
		<AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                OPTUS - React & React-Native
               

                </Typography>
                 <Tabs value="tet" >
                 <Tab value="login" label="login"  to='/' component={Link}  />
            <Tab value="dashboard" label="dashboard"  to='/dashboard' component={Link}  />
            
       
          </Tabs>
            </Toolbar>
        </AppBar>
</div>
    )

}