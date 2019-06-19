import * as React from "react";
import { Alert, Text, Image, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button";
import FingerprintPopup from './FingerprintPopup';

import FormTextInput from "../components/FormTextInput";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from 'optus-core/actions'
import { ScrollView } from "react-native-gesture-handler";

import PieChart from 'react-native-pie-chart';

class UsageSummary extends React.Component {
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

	usageBreakdown = [
		{
			name: 'Browsing',
			percentage: 45.8
		},
		{
			name: 'Spotify',
			percentage: 10.4
		},
		{
			name: 'Google Play',
			percentage: 6.9
		},
		{
			name: 'Google Generic',
			percentage: 5.3
		},
		{
			name: 'Youtube',
			percentage: 4.4
		},
		{
			name: 'Other usage',
			percentage: 27.2
		}
	]

  render() {
    const {navigate} = this.props.navigation;
    const chart_wh = 200
    let series = this.usageBreakdown.map(a => a.percentage);
    const sliceColor = ['#80276c','#00a3ad','#d93a1b', '#fdcc08', '#006280', 'ff6e7e'];
 
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Usage Summary</Text>
          <ScrollView>
            <View style={styles.centerPie}>
              <PieChart
                chart_wh={chart_wh}
                series={series}
                sliceColor={sliceColor}
              />
            </View>
            {this.usageBreakdown ? this.usageBreakdown.map(function(usage, index) {
              return <View style={styles.card}>
              <View style={styles['usage' + (index+1)]}></View>
              <Text style={styles.cardHeading}>{usage.name}</Text>
              <View style={styles.billWrapper}>
                  <View style={styles.billLeft}>
                      <Text style={styles.billAmount}>{usage.percentage}%</Text>
                  </View>
                  <View style={styles.billRight}>
                      
                  </View>
              </View>
              </View>
            }) : ''}
          </ScrollView>
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
    centerPie: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 40,
      marginTop: 10
    },
    container: {
        flex: 1,
        padding: 20
    },
    card: {
      width: "100%",
      paddingBottom: 10,
      borderBottomColor: '#DDD',
      borderBottomWidth: 2,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20
    },
    cardHeading: {
      fontWeight: 'bold'
    },
    usage1: {
      width: 20,
      height: 20,
      backgroundColor: '#80276c',
      marginRight: 15
    },
    usage2: {
      width: 20,
      height: 20,
      backgroundColor: '#00a3ad',
      marginRight: 15
    },
    usage3: {
      width: 20,
      height: 20,
      backgroundColor: '#d93a1b',
      marginRight: 15
    },
    usage4: {
      width: 20,
      height: 20,
      backgroundColor: '#fdcc08',
      marginRight: 15
    },
    usage5: {
      width: 20,
      height: 20,
      backgroundColor: '#006280',
      marginRight: 15
    },
    usage6: {
      width: 20,
      height: 20,
      backgroundColor: '#ff6e7e',
      marginRight: 15
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
      login
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsageSummary);