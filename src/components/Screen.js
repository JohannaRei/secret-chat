// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { StyleObj } from '@styleObj';
import colors from './styles/colors';

type ScreenProps = {
  children: any,
  style?: StyleObj
};

const Screen = ({ children, style }: ScreenProps) => (
  <View style={[styles.container, { ...style }]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.background
  }
});

export default Screen;
