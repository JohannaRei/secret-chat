import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from '@comp';
import colors from './styles/colors';

const NewMessageField = ({ value, writeMessage, sendMessage }) => (
  <View style={styles.container}>
    <TextInput
      value={value}
      onChangeText={writeMessage}
      style={styles.input}
      placeholder="Kirjoita jotain"
    />
    <TouchableOpacity onPress={sendMessage} style={styles.button}>
      <Icon size={25} name="md-send" color={colors.button} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 20
  },
  button: {
    marginLeft: 15
  },
  input: {
    backgroundColor: colors.backgroundColor,
    textAlign: 'left',
    color: '#fff'
  }
});

export default NewMessageField;
