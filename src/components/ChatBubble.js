import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import colors from './styles/colors';

const ChatBubble = ({ side, content }) => (
  <View style={[styles.container, side === 'right' && styles.containerRight]}>
    <View style={[styles.bubble, styles[side]]}>
      <Text style={styles[`${side}Text`]}>{content}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 7
  },
  containerRight: {
    justifyContent: 'flex-end'
  },
  bubble: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    maxWidth: '90%'
  },
  right: {
    backgroundColor: colors.myChatBubble,
    borderTopRightRadius: 0
  },
  left: {
    backgroundColor: colors.yourChatBubble,
    borderTopLeftRadius: 0
  },
  leftText: {
    color: 'black'
  }
});

export default ChatBubble;
