// @flow
import React from 'react';
import {
  TouchableOpacity, View, Text, StyleSheet, Platform
} from 'react-native';
import type { StyleObj } from '@styleObj';
import i18n from '@lang';

type Props = {
  onPress: () => void,
  title?: string,
  tx?: string,
  buttonStyle?: StyleObj,
  textStyle?: StyleObj
};

const Button = ({
  onPress, tx, title, buttonStyle, textStyle
}: Props) => {
  const text = (tx && i18n.t(tx)) || title;
  const label = Platform.OS === 'ios' ? text : text && text.toUpperCase();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={[styles.label, textStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  tx: null,
  title: 'Click me',
  buttonStyle: null,
  textStyle: null
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '90%',
    backgroundColor: '#C3073F',
    borderRadius: 5
  },
  label: {
    ...Platform.select({
      android: {
        fontWeight: 'bold'
      }
    })
  }
});

export default Button;
