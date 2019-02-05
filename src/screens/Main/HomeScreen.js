// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {
  Screen, Content, Footer, NewMessageField, Header, ChatHeader, ChatArea
} from '@comp';
import { Users } from '@stores';
import uuid from 'uuid/v4';
import { getUsername } from '@utils/storage';

type Props = {};

class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.userStore = Users;
    this.state = {
      currentMessage: '',
      messages: [],
      user: ''
    };
  }

  componentDidMount() {
    this.getUsername();
  }

  getUsername = async () => {
    await getUsername().then(name => this.setState({ user: name }));
  };

  writeMessage = (text) => {
    this.setState({ currentMessage: text });
  };

  sendMessage = () => {
    const { messages, currentMessage, user } = this.state;
    if (currentMessage.length > 0) {
      const newMessage = { id: uuid(), text: currentMessage, sender: user };
      const newMessages = [...messages, newMessage];
      this.setState({ messages: newMessages, currentMessage: '' });
    }
  };

  openOptions = () => {
    const { navigation } = this.props;
    navigation.navigate('Options');
  };

  openMenu = () => {
    console.log('opening menu');
  };

  render() {
    console.log(this.state);
    // const { users } = this.userStore;
    const { currentMessage, messages, user } = this.state;
    return (
      <Screen>
        <Header>
          <ChatHeader
            title="salakaverukset"
            openMenu={this.openMenu}
            onPressOptions={this.openOptions}
          />
        </Header>
        <Content header>
          <ChatArea messages={messages} side={user !== 'johQ' ? 'right' : 'left'} />
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
