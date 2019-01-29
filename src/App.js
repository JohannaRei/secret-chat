// @flow
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, WelcomeScreen, OptionsScreen } from './screens';
import * as lang from './languages';

const AppNavigator = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Home: { screen: HomeScreen },
    Options: { screen: OptionsScreen }
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

type Props = {};

type State = {
  loggedIn: boolean
};

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentWillMount() {
    lang.startListener();
  }

  componentWillUnmount() {
    lang.stopListener();
  }

  render() {
    return <AppContainer />;
  }
}
