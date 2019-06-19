import * as React from "react";
import { Text, Image, StyleSheet, View, ScrollView, KeyboardAvoidingView } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, getUser } from 'optus-core/actions';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import Svg,{
  Circle
} from 'react-native-svg';

class UserProfile extends React.Component {
  state = {
      
  }

  componentWillReceiveProps(props) {

  }
  
  componentDidMount() {

  }

  render() {
    return (
        <View style={styles.profile}>
            <View style={styles.user}>
                <View style={styles.info}>
                    <Text style={styles.name}>
                        Welcome, {this.props.account ? this.props.account.Name : ''}
                    </Text>
                </View>
            </View>
            <View style={styles.sections}>
								{this.props.cards ? this.props.cards.map((card, index) => {
									return <View style={styles.card}>
                  <Text style={styles.cardHeading}>Your Service</Text>
                    <View style={styles.billWrapper}>
                        <View style={styles.billLeft}>
                            <Text style={styles.billAmount}>{card}</Text>
                        </View>
                        <View style={styles.billRight}>
                            <Text>></Text>
                        </View>
                    </View>
                </View>
								}) : ''}
              </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    billWrapper: {
        flexDirection: 'row',
        paddingTop: 10
    },
    billLeft: {
        flexGrow: 1,
        flex: 1,
        flexDirection: 'row'
    },
    billAmount: {
        fontSize: 28,
        fontWeight: 'b 1old',
        marginRight: 5
    },
    billDate: {
        fontSize: 28,
        color: '#ccc'
    },
    billRight: {
        width: 80,
        textAlign: 'right',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#fff'
  },
  user: {
      backgroundColor: '#00a3ad',
      padding: 20,
      flexDirection: 'row',
      height: 160
  },
  profile: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sections: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#eee'
  },
  section: {
    paddingLeft: 20
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    elevation: 5,
    shadowColor: 'rgba(58,55,55,0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 15,
    marginBottom: 20
  },
  cardHeading: {
    fontWeight: 'bold',
    fontSize: 14,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 14
  },
  info: {
    flexGrow: 1,
    height: 120,
    justifyContent: 'center',
    paddingLeft: 20
  },
  name: {
    fontSize: 24,
    marginBottom: 0,
    fontWeight: 'bold',
    color: '#fff'
  },
  number: {
    fontSize: 18,
    marginBottom: 0,
    color: '#ddd'
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
