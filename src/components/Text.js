// @flow
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import type { StyleObj } from '@styleObj';
import i18n from '@lang';
import colors from './styles/colors';

type Props = {
  tx?: string,
  children?: string,
  style?: StyleObj
};

const Text = ({ tx, children, style }: Props) => {
  const text = tx ? i18n.t(tx) : children;
  return <RNText style={[styles.text, { ...style }]}>{text}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.text
  }
});

export default Text;
