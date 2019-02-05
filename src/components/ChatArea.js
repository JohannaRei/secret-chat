import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatBubble from './ChatBubble';

const ChatArea = ({ messages, side }) => (
  <FlatList
    data={messages}
    renderItem={({ item }) => <ChatBubble content={item.text} side={side} />}
    keyExtractor={item => item.id}
    style={styles.container}
  />
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
});

export default ChatArea;
