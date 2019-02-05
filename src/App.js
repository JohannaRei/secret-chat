// @flow
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { clear } from '@utils/storage';
import {
  SplashScreen,
  HomeScreen,
  WelcomeScreen,
  StartSigninScreen,
  OptionsScreen
} from './screens';
import * as lang from './languages';

const AppNavigator = createStackNavigator(
  {
    Splash: { screen: SplashScreen },
    Welcome: { screen: WelcomeScreen },
    Signin: { screen: StartSigninScreen },
    Home: { screen: HomeScreen },
    Options: { screen: OptionsScreen }
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

type Props = {};

type State = {};

export default class App extends Component<Props, State> {
  componentWillMount() {
    // clear();
    lang.startListener();
  }

  componentWillUnmount() {
    lang.stopListener();
  }

  render() {
    return <AppContainer />;
  }
}
