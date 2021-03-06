// @flow
import React, { Component } from 'react';
import {
  Screen, Button, Text, Footer, Content
} from '@comp';

type Props = {};

class WelcomeScreen extends Component<Props> {
  goHome = () => {
    const { navigation } = this.props;
    navigation.navigate('Signin');
  };

  render() {
    return (
      <Screen>
        <Content>
          <Text tx="welcomeScreen.title" />
        </Content>
        <Footer>
          <Button tx="welcomeScreen.button" onPress={this.goHome} />
        </Footer>
      </Screen>
    );
  }
}

export default WelcomeScreen;
