import * as React from "react";
import { Text, Image, StyleSheet, View, ScrollView, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, getUser } from 'optus-core/actions'

import UserProfile from './UserProfile';
import UsageBreakdown from './UsageBreakdown';
import Billing from './Billing';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Icon from 'react-native-vector-icons/FontAwesome';

import Svg,{
  Circle
} from 'react-native-svg';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ height: 200 }}>
        <Text style={{color: '#111'}}>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ height: 100 }}>
        <Text style={{color: '#111'}}>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
  Profile: { screen: UserProfile,
  navigationOptions: {
    tabLabel: 'Profile',
    tabBarIcon: () => <Icon name="user" size={20} color="#fff" />,
    tabBarColor: '#333547'
  } },
  Usage: { screen: UsageBreakdown,
    navigationOptions: {
      tabLabel: 'Usage',
      tabBarIcon: () => <Icon name="bar-chart" size={20} color="#fff" />,
      tabBarColor: '#FDCC08'
    } },
}, {
  initialRouteName: 'Profile',
  activeColor: '#f0edf6',
  inactiveColor: '#aaa',
  barStyle: { backgroundColor: '#333547', paddingTop: 10, paddingBottom: 10 },
  backBehavior: 'history'
});

export default createAppContainer(TabNavigator);