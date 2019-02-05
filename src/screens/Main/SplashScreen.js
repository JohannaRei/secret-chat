import React, { Component } from 'react';
import { Screen, Text } from '@comp';
import { isLoggedIn } from '@utils/storage';

class SplashScreen extends Component {
  componentWillMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus = () => {
    const { navigation } = this.props;
    isLoggedIn().then((value) => {
      if (value === 'true') {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Welcome');
      }
    });
  };

  render() {
    return (
      <Screen>
        <Text>splash</Text>
      </Screen>
    );
  }
}

export default SplashScreen;
