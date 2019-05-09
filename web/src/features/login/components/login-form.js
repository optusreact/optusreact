import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

	render() {
		const { email, password } = this.state.data;
		const { error } = this.state;
		return (
			<div className="row col-full-height center-xs middle-xs">
				<div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
					<Paper className="login" elevation={1}>
						<form onSubmit={this.onSubmit}>
							<TextField
								error={error.email ? true : false}
								id="email"
								label="Email"
								fullWidth={true}
								margin="normal"
								value={email}
								onChange={this.handleChange}
								helperText={error.email}
							/>
							<TextField
								error={error.password ? true : false}
								id="password"
								label="password"
								fullWidth={true}
								margin="normal"
								value={password}
								onChange={this.handleChange}
								helperText={error.password}
							/>
							<Button
								variant="outlined"
								color="primary"
								type="submit"
							>
								Login
							</Button>
							<div>
								{email}:{password}
							</div>
						</form>
					</Paper>
				</div>
			</div>
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
