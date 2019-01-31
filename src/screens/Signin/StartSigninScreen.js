// @flow
import React, { Component } from 'react';
import {
  Screen, Content, Text, Button, Footer, TextInput
} from '@comp';
import { validateUsername } from '@utils/validate';

class StartSigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '', // obviously won't be stored like this in the final version
      userError: null,
      passwordError: null
    };
  }

  validate = (type) => {
    const { username, password } = this.state;
    let errorMsg = null;
    let isValid = false;
    switch (type) {
      case 'username':
        isValid = validateUsername(username);
        if (!isValid) errorMsg = "Don't use weird characters";
        this.setState({ userError: errorMsg });
        break;
      case 'password':
        isValid = validateUsername(password);
        if (!isValid) errorMsg = 'Choose a different password';
        this.setState({ passwordError: errorMsg });
        break;
      case 'all':
        return true;
      default:
        return false;
    }
    return isValid;
  };

  onChangeText = (text, field) => {
    this.setState({ [field]: text });
  };

  onSignin = () => {
    const { navigation } = this.props;
    const isValid = this.validate('all');
    if (isValid) {
      navigation.navigate('Home');
    }
  };

  render() {
    const {
      username, password, userError, passwordError
    } = this.state;
    return (
      <Screen>
        <Content centered>
          <Text>Start signin</Text>
          <TextInput
            value={username}
            name="username"
            onChangeText={this.onChangeText}
            maxLength={10}
            validate={this.validate}
          />
          <Text>{userError}</Text>
          <TextInput
            value={password}
            name="password"
            onChangeText={this.onChangeText}
            maxLength={20}
            validate={this.validate}
          />
          <Text>{passwordError}</Text>
        </Content>
        <Footer>
          <Button title="Sign in" onPress={this.onSignin} />
        </Footer>
      </Screen>
    );
  }
}

export default StartSigninScreen;
