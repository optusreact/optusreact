import * as React from "react";
import { Text, Image, StyleSheet, View, ScrollView, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, getUser } from 'optus-core/actions'

import Svg,{
  Circle
} from 'react-native-svg';

class Dashboard extends React.Component {
  state = {
    value:0,
    valuelabel:'Remaining',
    size:200,
    strokewidth:26
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

  componentWillReceiveProps(props) {
    console.log('dashboard props');
    console.log(props);
		if (props.authenticated) {
			this.props.navigation.navigate('Dashboard')
		}
  }
  
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
              <Text style={styles.heading}>
                Welcome, Gian
              </Text>
              <Text style={styles.subheading}>
                Account Details
              </Text>
                {this.props.account ? Object.keys(this.props.account).map((key, index) => {
                return <Text key={key}>
                  {key}: {this.props.account[key]}
                </Text>
                }) : ''}
                <Text style={styles.subheading}>
                  Card Details
                </Text>
								{this.props.cards ? this.props.cards.map((card, index) => {
									return <View key={index}><Text>Account number {card}</Text>
                    </View>
								}) : ''}
                <Text style={styles.subheading}>
                  Your Usage
                </Text>
                <View style={styles.usageWrapper}>
                  <Image
                    style={{width: 200, height: 200, marginBottom: 10, marginTop: 10}}
                    source={require('../assets/usage-standard.png')}
                  />
                  <Button label="View Breakdown"  onPress={() => this.props.navigation.navigate('UsageBreakdown')} />
                </View>
                <Text style={styles.subheading}>
                  Your Bill
                </Text>
                <View style={styles.usageWrapper}>
                  <Image
                    style={{width: 380, height: 450, marginBottom: 10, marginTop: 10}}
                    resizeMode="contain"
                    source={require('../assets/billing-section.png')}
                  />
                </View>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  usageWrapper: {
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40
  },
  subheading: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold'
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

const mapStateToProps = (state) => {
  let authenticated = state.account.authenticated;
  let account = state.account.account.account;
  let cards = state.account.account.cards;
  let usage = state.account.account.usage;
  let billing = state.account.account.billing;
  return {
  'authenticated': authenticated,
  'account': account,
  'cards': cards,
  'usage': usage,
  'billing': billing
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      login,
      getUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);