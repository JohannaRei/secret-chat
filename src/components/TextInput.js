import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({
  value, onChangeText, style, name, maxLength, validate
}) => (
  <RNTextInput
    value={value}
    onChangeText={text => onChangeText(text, name)}
    autoCorrect={false}
    keyboardAppearance="dark"
    maxLength={maxLength}
    onBlur={() => validate(name)}
    secureTextEntry={name === 'password'}
    style={[styles.input, style]}
  />
);

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

export default TextInput;
