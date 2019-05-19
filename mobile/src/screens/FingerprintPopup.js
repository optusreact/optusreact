import React, { Component } from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
  StyleSheet
} from 'react-native';

import FingerprintScanner from 'react-native-fingerprint-scanner';

class FingerprintPopup extends Component {

  constructor(props) {
    super(props);
    this.state = { errorMessage: undefined };
  }

  componentDidMount() {
    FingerprintScanner
      .authenticate({ onAttempt: this.handleAuthenticationAttempted })
      .then(() => {
        this.props.handleAuthSuccessful();
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  }

  componentWillUnmount() {
    FingerprintScanner.release();
  }

  handleAuthenticationAttempted = (error) => {
    this.setState({ errorMessage: error.message });
  };

  render() {
    const { errorMessage } = this.state;
    const { style, handlePopupDismissed } = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.contentContainer, style]}>
          <Text style={styles.heading}>
            Touch your device's{'\n'}fingerprint sensor
          </Text>

          <Image
                style={styles.fingerprintImage}
                source={require('../assets/fingerprint.png')}
                resizeMode="contain"
                />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePopupDismissed}
          >
            <Text style={styles.buttonText}>
              Cancel
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    marginVertical: 45,
  },
  heading: {
    textAlign: 'center',
    color: '#333547',
    fontSize: 21,
    marginBottom: 15
  },
  description: (error) => ({
    textAlign: 'center',
    color: error ? '#ea3d13' : '#a5a5a5',
    height: 65,
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20,
  }),
  buttonContainer: {
    padding: 20,
  },
  buttonText: {
    color: '#333547',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default FingerprintPopup;