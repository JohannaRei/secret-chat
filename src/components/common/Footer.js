// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type FooterProps = {
  children: any,
  style?: StyleObj
};

const Footer = ({ children, style }: FooterProps) => (
  <View style={[styles.container, { ...style }]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignContent: 'center',
    justifyContent: 'center'
  }
});

export default Footer;
