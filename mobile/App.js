import React, { Component } from "react";

import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from "./src/screens/LoginScreen";
import Dashboard from "./src/screens/Dashboard";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import doctorsApp from 'optus-core/reducers'

import Navigator from "./Navigator";

let store = createStore(doctorsApp);

export default class App extends Component {
  render () {
    return (
        <Provider store={store}>
          <Navigator />
        </Provider>
    )
  }
}
 