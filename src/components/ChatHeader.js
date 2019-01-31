import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from './styles/colors';
import Text from './Text';

const ChatHeader = ({ title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
    <Icon size={20} name="md-settings" color={colors.button} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default ChatHeader;
