import * as React from "react";
import { Alert, Text, Image, StyleSheet, View, KeyboardAvoidingView, StatusBar } from "react-native";
import Button from "../components/Button";
import FingerprintPopup from './FingerprintPopup';

import FormTextInput from "../components/FormTextInput";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'optus-core/actions'

class LoginScreen extends React.Component {
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
            <Image
              style={{width: 80, height: 50, marginBottom: 40}}
              source={require('../assets/logo-yes.png')}
            />
            <View style={styles.form}>
              <Button label="Login using Touch ID" onPress={this.handleFingerprintShowed} />
            </View>
            {this.state.popupShowed && (
              <FingerprintPopup
                style={styles.popup}
                handleAuthSuccessful={this.handleAuthSuccessful}
                handlePopupDismissed={this.handleFingerprintDismissed}
              />
            )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333547',
    alignItems: "center",
    justifyContent: "center"
  },
  whiteText: {
      color: "#eee",
      opacity: 0.8,
      fontSize: 22
  },
  hr: {
    height: 2,
    backgroundColor: "transparent",
    width: "80%",
    marginTop: 60,
    marginBottom: 60
  },
  logo: {
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%"
  },
  logoImage: {
      width: "20%",
      height: 100,
      marginBottom: 80
  },
  fingerprintImage: {
      width: "60%",
      height: 100,
      marginBottom: 60
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
