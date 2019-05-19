import React, { Component } from "react";
import { connect } from "react-redux";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import doctorsApp from 'optus-core/reducers'

import { actions } from 'optus-core/actions'

import LoginScreen from "./src/screens/LoginScreen";
import Dashboard from "./src/screens/Dashboard";
import UsageBreakdown from "./src/screens/UsageBreakdown";

import {
  createAppContainer,
  createStackNavigator
} from "react-navigation";

const AppNavigator = createStackNavigator({
    Home: {screen: LoginScreen,
      navigationOptions: {
        header: null,
    }},
    Dashboard: {screen: Dashboard,
      navigationOptions: {
        title: 'Dashboard',
        headerStyle: {
          backgroundColor: '#333547',
        },
        headerTintColor: '#fff',
    }},
    UsageBreakdown: {screen: UsageBreakdown,
      navigationOptions: {
        title: 'Usage Breakdown',
        headerStyle: {
          backgroundColor: '#333547',
        },
        headerTintColor: '#fff',
    }}
});

const AppContainer = createAppContainer(AppNavigator);

class Navigator extends Component {
  render() {
    return <AppContainer screenProps={this.props} />;
  }
}

export default connect(
  null,
  actions
)(Navigator);