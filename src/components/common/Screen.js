// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { StyleObj } from '@styleObj';

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
    justifyContent: 'center',
    backgroundColor: '#1A1A1D'
  }
});

export default Screen;
