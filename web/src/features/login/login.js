import React, { Component } from "react";
import LoginForm from "./components/login-form";
import { connect } from 'react-redux';
import * as login_actions from 'optus-core/login/actions';
import { bindActionCreators } from 'redux';

class Login extends Component {

	submit = (data) => {
		
		console.log('on Submit called parent', JSON.stringify(data));
		this.props.actions.login(data).then(() => this.props.history.push("/dashboard"));
		
	};

	render() {
		return (
			<div>
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}



const loginContainer = connect(
	null,
	dispatch => ({actions:bindActionCreators(login_actions, dispatch)})
	)(Login)

export default loginContainer
