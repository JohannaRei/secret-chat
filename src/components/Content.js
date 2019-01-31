// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StyleObj } from '@styleObj';

const Content = ({
  children,
  style,
  centered
}: {
  children: any,
  style: StyleObj,
  centered: boolean
}) => <View style={[styles.container, style, centered && styles.centered]}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  centered: {
    justifyContent: 'center'
  }
});

export default Content;
