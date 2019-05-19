import React, { Component } from "react";
import LoginForm from "./components/login-form";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'optus-core/actions'

class Login extends Component {
	submit = (data) => {
		this.props.login(data.email, data.password);
	};

	componentWillReceiveProps(props) {
		if (props.authenticated) {
			this.props.history.push("/dashboard");
		}
	}

	render() {
		return (
			<div>
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    let authenticated = state.account.authenticated;
    let error = state.account.error;
    return {
		'authenticated': authenticated,
		'error': error
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);