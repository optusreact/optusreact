import * as React from "react";
import { Text, Image, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";

class Dashboard extends React.Component {

  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <View style={styles.form}>
            <Text>
                Dashboard
            </Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default Dashboard;