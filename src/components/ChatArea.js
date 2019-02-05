import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatBubble from './ChatBubble';

const ChatArea = ({ messages }) => (
  <FlatList
    data={messages}
    renderItem={({ item }) => (
      <ChatBubble content={item.text} side={item.sender === 'johQ' ? 'right' : 'left'} />
    )}
    keyExtractor={item => item.id}
    style={styles.container}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch'
  }
});

export default ChatArea;
