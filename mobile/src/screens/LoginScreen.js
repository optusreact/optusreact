import * as React from "react";
import { Alert, Text, Image, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button";
import FingerprintPopup from './FingerprintPopup';

import FormTextInput from "../components/FormTextInput";

class LoginScreen extends React.Component {
  state = {
    popupShowed: null
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
    this.props.navigation.navigate('Dashboard')
  };

  handleFingerprintShowed = () => {
    this.setState({ popupShowed: true });
  };

  handleFingerprintDismissed = () => {
    this.setState({ popupShowed: false });
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
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

export default LoginScreen;