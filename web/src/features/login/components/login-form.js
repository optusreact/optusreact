import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import _ from "lodash";
import  "./login-form.scss";
import { func, string, number } from "prop-types";

class LoginForm extends Component {
	state = {
		data: {
			email: "",
			password: ""
		},
		loading: false,
		error: {}
	};

	static propTypes = {
		submit: func.isRequired
	};
	handleChange = e => {
		this.setState({
			data: { ...this.state.data, [e.target.id]: e.target.value }
		});
	};
	onSubmit = e => {
		e.preventDefault();
		const error = this.validate(this.state.data);
		this.setState({ error });
		if (_.keys(error).length > 0) {
			console.log("errors");
			return;
		}
		this.props.submit(this.state.data);
	};
	validate = data => {
		const error = {};
		const { email, password } = data;
		if (!email) {
			error.email = "email is required !";
		}
		if (!password) {
			error.password = "password is required !";
		}

		return error;
	};

	componentDidMount() {
	}

	render() {
		const { email, password } = this.state.data;
		const { error } = this.state;
		return (
			<Grid className="login-form" container spacing={16}>
				<Grid item xs={7}>
					<form onSubmit={this.onSubmit}>
						<h1>Login to your account</h1>
						<p>Please log in using the email address you provided when you signed up.</p>
						<TextField
							error={error.email ? true : false}
							id="email"
							label="Email"
							fullWidth={true}
							value={email}
							onChange={this.handleChange}
							helperText={error.email}
							className="login-top"
						/>
						<TextField
							type="password"
							error={error.password ? true : false}
							id="password"
							label="Password"
							fullWidth={true}
							value={password}
							onChange={this.handleChange}
							helperText={error.password}
						/>
						<button
							className="btn btn-optus btn-login"
							color="primary"
							type="submit"
						>
							Login
						</button>
						<p><a href="#">Forgotten your username or password?</a></p>
					</form>
				</Grid>
			</Grid>
		);
	}
}



class App extends Component {

  state={
    
      donutval:55
    
  }
  updateVal = e => {
		this.setState({donutval:e.target.value})
	};
 
  render(){
    return(
      <div>
        <DonutChart value={this.state.donutval} />
        <br/>
       
      </div>
    )
  }
};

class DonutChart extends Component {


// static propTypes = {
// 		value: number,        // value the chart should show
// 		valuelabel: string,   // label for the chart
// 		size: number,         // diameter of chart
// 		strokewidth: number   // width of chart line
// };

static defaultProps = {
		value:0,
		valuelabel:'Completed',
		size:200,
		strokewidth:26
}
  
  
  render() {

    const halfsize = (this.props.size * 0.5);
    const radius = halfsize - (this.props.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((this.props.value * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: this.props.strokewidth};
    const indicatorstyle = {strokeWidth: this.props.strokewidth, strokeDasharray: dashval}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

    return (
      <svg width={this.props.size} height={this.props.size} className="donutchart">
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
        <text className="donutchart-text" x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
          <tspan className="donutchart-text-val">{this.props.value}</tspan>
          <tspan className="donutchart-text-percent">%</tspan>
          <tspan className="donutchart-text-label" x={halfsize} y={halfsize+10}>{this.props.valuelabel}</tspan>
        </text>
      </svg>
    );
  }
}


export default LoginForm;
