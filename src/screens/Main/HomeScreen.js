// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {
  Screen, Text, Content, Button, TextInput, Footer
} from '@comp';
import { Users, Options } from '@stores';

type Props = {};

class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.userStore = Users;
    this.state = {
      currentMessage: '',
      messages: []
    };
  }

  addJohanna = () => {
    const johq = { username: 'Johanna', password: 'password', nickname: 'johQ' };
    this.userStore.addUser(johq);
  };

  writeMessage = (text) => {
    this.setState({ currentMessage: text });
  };

  sendMessage = (msg) => {
    const { messages } = this.state;
    const newMessages = [...messages, msg];
    this.setState({ messages: newMessages });
  };

  render() {
    // const { users } = this.userStore;
    const { currentMessage } = this.state;
    return (
      <Screen>
        <Content>
          {/* <Text tx="homeScreen.title" />
          {users.map(user => (
            <Text key={user.username}>{user.nickname}</Text>
          ))}
          {options.map(option => (
            <Button title={`${option.name} ${option.active}`} onPress={option.toggle} />
          ))}
          <Text>{this.optionStore.activeOptions[0].name}</Text>
          <Button title="Add Johanna" onPress={this.addJohanna} /> */}
        </Content>
        <Footer>
          <TextInput value={currentMessage} onChangeText={this.writeMessage} />
        </Footer>
      </Screen>
    );
  }
}

export default observer(HomeScreen);
