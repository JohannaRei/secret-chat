// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {
  Screen, Text, Content, Footer, NewMessageField, Header, ChatHeader
} from '@comp';
import { Users } from '@stores';

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

  writeMessage = (text) => {
    this.setState({ currentMessage: text });
  };

  sendMessage = () => {
    const { messages, currentMessage } = this.state;
    const newMessages = [...messages, currentMessage];
    this.setState({ messages: newMessages, currentMessage: '' });
  };

  render() {
    // const { users } = this.userStore;
    const { currentMessage, messages } = this.state;
    return (
      <Screen>
        <Header>
          <ChatHeader title="salakaverukset" />
        </Header>
        <Content header>
          {messages.map(message => (
            <Text>{message}</Text>
          ))}
        </Content>
        <Footer>
          <NewMessageField
            value={currentMessage}
            writeMessage={this.writeMessage}
            sendMessage={this.sendMessage}
          />
        </Footer>
      </Screen>
    );
  }
}

export default observer(HomeScreen);
