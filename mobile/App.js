/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { FlatList } from 'react-native';

import { getAccountDetails } from './account';

var account = getAccountDetails();
var accountDetails = account.account;
var cardDetails = account.cards;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    var accountList = [];
    var list = Object.entries(accountDetails);

    return (
      <View style={styles.container}>
        
        <Text style={styles.mt100}>Name</Text>
        <Text style={styles.mb40}>{accountDetails.Name}</Text>
        <Text>Date of Birth</Text>
        <Text style={styles.mb40}>{accountDetails["Date of Birth"]}</Text>
        <FlatList
          data={cardDetails}
          renderItem={(card) => { return <View style={styles.cardDetails}><Text>Gian Johansen</Text><Text>{card.item}</Text></View>}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mt100: {
    marginTop: 100
  },
  mb40: {
    height: 40
  },
  cardDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    padding: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
