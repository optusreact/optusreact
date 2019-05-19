import * as React from "react";
import { Alert, Text, Image, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button";
import FingerprintPopup from './FingerprintPopup';

import FormTextInput from "../components/FormTextInput";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'optus-core/actions'

class UsageBreakdown extends React.Component {
  state = {
    popupShowed: null,
    _systemEmail: 'email',
    _systemPassword: 'password'
  }

  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  handleAuthSuccessful = () => {
    this.setState({ popupShowed: false });
    if (this.props.account) {
      this.props.navigation.navigate('Dashboard');
    } else {
      this.props.login(this.state._systemEmail, this.state._systemPassword);
    }
  };

  handleFingerprintShowed = () => {
    this.setState({ popupShowed: true });
  };

  handleFingerprintDismissed = () => {
    this.setState({ popupShowed: false });
  };

	componentWillReceiveProps(props) {
		if (props.authenticated) {
			this.props.navigation.navigate('Dashboard')
		}
	}

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Usage breakdown</Text>
            <Image
              style={{width: 380, height: 500, marginBottom: 40}}
              source={require('../assets/usage-breakdown.png')}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

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

export default connect(mapStateToProps, mapDispatchToProps)(UsageBreakdown);
