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
			error.email = "Enter your email address";
		}
		if (!password) {
			error.password = "Enter your password";
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
				<Grid item xs={12} md={7}>
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

export default LoginForm;
