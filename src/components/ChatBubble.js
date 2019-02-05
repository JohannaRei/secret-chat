import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import colors from './styles/colors';

const ChatBubble = ({ side, content }) => (
  <View style={[styles.container, styles[side]]}>
    <Text style={styles[`${side}Text`]}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    padding: 10
  },
  right: {
    backgroundColor: colors.myChatBubble
  },
  left: {
    backgroundColor: colors.yourChatBubble
  },
  leftText: {
    color: 'black'
  }
});

export default ChatBubble;
