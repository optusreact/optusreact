import * as React from "react";
import { Text, Image, StyleSheet, View, ScrollView, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, getUser } from 'optus-core/actions'

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Svg,{
  Circle
} from 'react-native-svg';

class Billing extends React.Component {
  state = {
      
  }

  componentWillReceiveProps(props) {

  }
  
  componentDidMount() {

  }

  render() {
    return (
        <View style={styles.wrapper}>
        <View style={styles.usageWrapper}>
            <Image
            style={{width: 380, height: 450, marginBottom: 10, marginTop: 10}}
            resizeMode="contain"
            source={require('../assets/billing-section.png')}
            />
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 40,
        flex: 1
    },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#fff'
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    elevation: 5,
    shadowColor: 'rgba(58,55,55,0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 15
  },
  sectionHeading: {
    fontSize: 14,
    color: '#999',
    fontWeight: 'bold'
  },
  info: {
    flex: 1,
    justifyContent: 'center'
  },
  go: {
    width: 60
  },
  name: {
    fontSize: 16,
    marginBottom: 0,
    fontWeight: 'bold',
    color: '#111'
  },
  number: {
    fontSize: 16,
    marginBottom: 0,
    color: '#111'
  }
});

export default Billing;