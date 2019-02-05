import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from './styles/colors';
import Text from './Text';

const ChatHeader = ({ title, openMenu, onPressOptions }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={openMenu}>
      <Icon size={25} name="md-menu" color={colors.button} />
    </TouchableOpacity>
    <Text>{title}</Text>
    <TouchableOpacity onPress={onPressOptions}>
      <Icon size={25} name="md-settings" color={colors.button} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
});

export default ChatHeader;
