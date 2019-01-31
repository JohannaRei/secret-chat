import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from '@comp';
import colors from './styles/colors';

const NewMessageField = ({ value, writeMessage, sendMessage }) => (
  <View style={styles.container}>
    <TextInput value={value} onChangeText={writeMessage} />
    <TouchableOpacity onPress={sendMessage} style={styles.button}>
      <Icon size={25} name="md-send" color={colors.button} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginLeft: 15
  }
});

export default NewMessageField;
